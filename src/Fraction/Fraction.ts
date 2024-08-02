import { BaseFraction } from './BaseFraction';
import InfiniteFraction from './InfiniteFraction';
import { IntegerFraction } from './IntegerFraction';
import { UndefinedFraction } from './UndefinedFraction';
import { ZeroFraction } from './ZeroFraction';

export interface IFraction {
    getNumerator: number;
    getDenominator: number;
    add(fraction: IFraction): IFraction;
    substract(fraction: IFraction): IFraction;
    inverse(): IFraction;
    multiply(fraction: IFraction): IFraction;
    divide(fraction: IFraction): IFraction;
    getValue(): string;
}

export default class Fraction {
    public static build(numerator: number, denominator: number = 1): IFraction {
        if (denominator === 0 && numerator === 0) {
            return UndefinedFraction.getInstance();
        }
        if (denominator === 0) {
            return InfiniteFraction.getInstance();
        }
        if (numerator === 0) {
            return ZeroFraction.getInstance();
        }
        if (denominator === 1 && numerator === 1) {
            return IntegerFraction.getInstance();
        }
        return new BaseFraction(numerator, denominator);
    }
}
