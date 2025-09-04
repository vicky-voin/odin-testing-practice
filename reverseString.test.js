import {reverseString} from "./myFunctions"

test('reverses string', () =>
{
    expect(reverseString("potato")).toBe("otatop");
})

test('reverses capitalized string', () =>
{
    expect(reverseString("Mr. Potato")).toBe("otatoP .rM");
})