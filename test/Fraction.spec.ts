import Fraction from '../src/Fraction/Fraction';
import InfiniteFraction from '../src/Fraction/InfiniteFraction';
import { ZeroFraction } from '../src/Fraction/ZeroFraction';

describe('fractions', () => {
    describe('Additions', () => {
        const zero = Fraction.build(0, 1);
        const undefinedFraction = Fraction.build(0, 0);
        describe('Neutral element management', () => {
            const aFraction = Fraction.build(12, 7);
            it('should return  0/1 when we add 0/1 to 0/1', () => {
                const result = zero.add(zero);
                const expected = zero;
                expect(result.getValue()).toEqual(expected.getValue());
            });
            it('should return the original Fraction when we add a neutral element to a Fraction', () => {
                const result = aFraction.add(zero);
                const expected = aFraction;
                expect(result.getValue()).toEqual(expected.getValue());
            });
            it('should return the Fraction when we add a fraction to a neutral element', () => {
                const result = zero.add(aFraction);
                const expected = aFraction;
                expect(result.getValue()).toEqual(expected.getValue());
            });
        });

        describe('Of two natural numbers', () => {
            it('should return  7/1 when we add 3/1 to 4/1', () => {
                const result = Fraction.build(3, 1).add(Fraction.build(4, 1));
                const expected = Fraction.build(7, 1);
                expect(result.getValue()).toEqual(expected.getValue());
            });
        });

        describe('two fractions with the same denominator', () => {
            it('should return  6/7 when we add 4/7 to 2/7', () => {
                const result = Fraction.build(4, 7).add(Fraction.build(2, 7));
                const expected = Fraction.build(6, 7);
                expect(result.getValue()).toEqual(expected.getValue());
            });
        });
        describe('two fractions with different denominators', () => {
            it('should return  11/12 when we add 1/6 to 3/4', () => {
                const result = Fraction.build(1, 6).add(Fraction.build(3, 4));
                const expected = Fraction.build(11, 12);
                expect(result.getValue()).toEqual(expected.getValue());
            });
        });
        describe('negative fractions', () => {
            it('should return  -1/2 when we add -1/4 to -1/4', () => {
                const result = Fraction.build(-1, 4).add(Fraction.build(-1, 4));
                const expected = Fraction.build(-1, 2);
                expect(result.getValue()).toEqual(expected.getValue());
            });
            it('should return  0/1 when we add 1/4 to -1/4', () => {
                const result = Fraction.build(1, 4).add(Fraction.build(-1, 4));
                const expected = Fraction.build(0, 1);
                expect(result.getValue()).toEqual(expected.getValue());
            });
            it('should return  -1/2 when we add -1/4 to 1/-4', () => {
                const result = Fraction.build(-1, 4).add(Fraction.build(1, -4));
                const expected = Fraction.build(-1, 2);
                expect(result.getValue()).toEqual(expected.getValue());
            });
        });

        describe('Infinity and other limit cases', () => {
            it('should return  Infinity/1 when we create a fraction 1/0', () => {
                const infinite = Fraction.build(1, 0);
                expect(infinite instanceof InfiniteFraction).toBe(true);
                expect(infinite.getValue()).toEqual('Infinity/1');
            });
            it('should return ZeroFraction when we create a fractionwith 0/234', () => {
                const zero = Fraction.build(0, 234);
                expect(zero instanceof ZeroFraction).toBe(true);
                expect(zero.getValue()).toEqual('0/1');
            });
            it('should return undefinedFraction when we create a fraction', () => {
                expect(undefinedFraction.getValue()).toEqual(
                    undefinedFraction.getValue(),
                );
            });
        });

        it('should return  Infinity/1 when we add 1/0 to 1/1', () => {
            const one = Fraction.build(1, 1);
            const infinity = Fraction.build(1, 0);
            const result = one.add(infinity);
            const expected = infinity;
            expect(result.getValue()).toEqual(expected.getValue());
        });
    });
    describe('Muliplication', () => {
        const neutral = Fraction.build(1, 1);
        describe('Neutral element management', () => {
            const aFraction = Fraction.build(12, 7);
            it('should return  0/1 when we add 0/1 to 0/1', () => {
                const result = neutral.multiply(neutral);
                const expected = neutral;
                expect(result.getValue()).toEqual(expected.getValue());
            });
            it('should return the original Fraction when we add a neutral element to a Fraction', () => {
                const result = aFraction.multiply(neutral);
                const expected = aFraction;
                expect(result.getValue()).toEqual(expected.getValue());
            });
            it('should return the Fraction when we add a fraction to a neutral element', () => {
                const result = neutral.multiply(aFraction);
                const expected = aFraction;
                expect(result.getValue()).toEqual(expected.getValue());
            });
        });
    });
    describe('subtraction', () => {
        const zero = Fraction.build(0, 1);
        it('should return  0/1 when we subtract 0/1 to 0/1', () => {
            const result = zero.substract(zero);
            const expected = zero;
            expect(result.getValue()).toEqual(expected.getValue());
        });

        it('should return  1/1 when we subtract 0/1 to 1/1', () => {
            const one = Fraction.build(1, 1);
            const result = one.substract(zero);
            const expected = one;
            expect(result.getValue()).toEqual(expected.getValue());
        });
        it('should return -11/10 when we subtract 8/5 to 1/2', () => {
            const result = Fraction.build(1, 2).substract(Fraction.build(8, 5));
            const expected = Fraction.build(-11, 10);
            expect(result.getValue()).toEqual(expected.getValue());
        });
        it('should return 14/15 when we divide 7/5 to 3/2', () => {
            const result = Fraction.build(7, 5).divide(Fraction.build(3, 2));
            const expected = Fraction.build(14, 15);
            expect(result.getValue()).toEqual(expected.getValue());
        });
    });
});
