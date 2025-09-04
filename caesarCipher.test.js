import { caesarCipher } from "./myFunctions";

test('characters are shifted correctly', () =>
{
    expect(caesarCipher('abc', 3)).toBe('def');
})

test('characters are shifted circularly', () =>
{
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('capitalized characters are shifted circularly', () =>
{
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
})

test('capitalization is preserved', () =>
{
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('punctuation is preserved', () =>
{
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})