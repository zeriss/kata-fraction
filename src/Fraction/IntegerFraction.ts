import Fraction, { IFraction } from './Fraction';
import { BaseFraction } from './BaseFraction';

export class IntegerFraction extends BaseFraction implements IFraction {
    private static instance: IntegerFraction;
    private constructor() {
        super(1, 1);
    }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new IntegerFraction();
        }

        return this.instance;
    }
    public multiply = (fraction: IFraction): IFraction =>
        Fraction.build(fraction.getNumerator, fraction.getDenominator);

    public getValue() {
        return `1/1`;
    }
}
