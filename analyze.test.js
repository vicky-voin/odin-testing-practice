import { analyzeArray } from "./myFunctions";

test('array is analyzed correctly', () => 
{
    const result = expect(analyzeArray([1,8,3,4,2,6]));

    result.toHaveProperty('average', 4);
    result.toHaveProperty('min', 1);
    result.toHaveProperty('max', 8);
    result.toHaveProperty('length', 6);
})

test('empty array is handled correctly', () => 
{
    const result = expect(analyzeArray([]));

    result.toHaveProperty('average', 0);
    result.toHaveProperty('min', 0);
    result.toHaveProperty('max', 0);
    result.toHaveProperty('length', 0);
})