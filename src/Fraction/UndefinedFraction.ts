import { IFraction } from './Fraction';
import { BaseFraction } from './BaseFraction';

export class UndefinedFraction extends BaseFraction implements IFraction {
    private static instance: UndefinedFraction;
    private constructor() {
        super(0, 0);
    }
    public static getInstance(): IFraction {
        if (!this.instance) {
            this.instance = new UndefinedFraction();
        }

        return this.instance;
    }

    public add = (fraction: IFraction): IFraction =>
        UndefinedFraction.getInstance();

    public subtract = (fraction: IFraction): IFraction =>
        UndefinedFraction.getInstance();

    public multiply = (fraction: IFraction): IFraction =>
        UndefinedFraction.getInstance();

    public divide = (fraction: IFraction): IFraction =>
        UndefinedFraction.getInstance();

    public getValue() {
        return `0/0`;
    }
}
