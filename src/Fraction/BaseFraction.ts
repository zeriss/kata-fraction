import { IFraction } from './Fraction';

export class BaseFraction implements IFraction {
    public constructor(
        private numerator: number,
        private denominator: number,
    ) {
        this.simplify();
    }
    public get getNumerator(): number {
        return this.numerator;
    }

    public get getDenominator(): number {
        return this.denominator;
    }

    public add = (fraction: IFraction): IFraction =>
        new BaseFraction(
            this.numerator * fraction.getDenominator +
                this.denominator * fraction.getNumerator,
            this.denominator * fraction.getDenominator,
        );

    public substract = (fraction: IFraction): IFraction =>
        this.add(fraction.inverse());

    public inverse = (): IFraction =>
        new BaseFraction(-this.numerator, this.denominator);

    public multiply = (fraction: IFraction): IFraction =>
        new BaseFraction(
            this.numerator * fraction.getNumerator,
            this.denominator * fraction.getDenominator,
        );

    public divide = (fraction: IFraction): IFraction =>
        this.multiply(
            new BaseFraction(fraction.getDenominator, fraction.getNumerator),
        );
    protected simplify = () => {
        const gcd = this.gcd(
            Math.abs(this.numerator),
            Math.abs(this.denominator),
        );
        const sign = this.denominator / gcd < 0 ? -1 : 1;

        this.numerator = (sign * this.numerator) / gcd;
        this.denominator = (sign * this.denominator) / gcd;
    };

    private gcd(a: number, b: number): number {
        if (b === 1) {
            return b;
        }
        if (b === 0) {
            return a;
        } else {
            return this.gcd(b, a % b);
        }
    }

    public getValue() {
        return `${this.numerator}/${this.denominator}`;
    }
}
