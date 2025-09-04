import capitalize from "./myFunctions"

test('capitalizes the word', () =>
{
    expect(capitalize("cat")).toBe('Cat');
});

test('capitalizes the first word in sentence', () =>
{
    expect(capitalize("my cat is very cute")).toBe('My cat is very cute');
});

test('capitalized word stays capitalzied', () =>
{
    expect(capitalize("Dog")).toBe('Dog');
});