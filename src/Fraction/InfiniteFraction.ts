import { IFraction } from './Fraction';
import { BaseFraction } from './BaseFraction';

export default class InfiniteFraction
    extends BaseFraction
    implements IFraction
{
    private static instance: InfiniteFraction;
    private constructor() {
        super(Number.POSITIVE_INFINITY, 1);
    }
    public static getInstance() {
        if (!this.instance) {
            this.instance = new InfiniteFraction();
        }

        return this.instance;
    }
    public multiply = (fraction: IFraction): IFraction => {
        return InfiniteFraction.getInstance();
    };

    public add = (fraction: IFraction): IFraction => {
        return new InfiniteFraction();
    };
    public getValue() {
        return `Infinity/1`;
    }
}
