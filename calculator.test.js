import { calculator } from "./myFunctions";

test('adds two numbers', () =>
{
    expect(calculator.add(2,2)).toBe(4);
})

test('subtracts two numbers', () =>
{
    expect(calculator.subtract(2,2)).toBe(0);
})

test('divides two numbers', () =>
{
    expect(calculator.divide(2,2)).toBe(1);
})

test('multiplies two numbers', () =>
{
    expect(calculator.multiply(2,3)).toBe(6);
})