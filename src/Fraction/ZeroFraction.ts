import Fraction, { IFraction } from './Fraction';
import { BaseFraction } from './BaseFraction';

export class ZeroFraction extends BaseFraction implements IFraction {
    private static instance: ZeroFraction;
    private constructor() {
        super(0, 1);
    }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new ZeroFraction();
        }

        return this.instance;
    }

    public add = (fraction: IFraction): IFraction => {
        return Fraction.build(fraction.getNumerator, fraction.getDenominator);
    };
    public multiply = (fraction: IFraction): IFraction => {
        return ZeroFraction.getInstance();
    };
    public getValue() {
        return `0/1`;
    }
}
