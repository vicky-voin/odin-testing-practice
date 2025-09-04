
function capitalize(input)
{
    let firstLetter = input.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    const restOfString = input.slice(1);

    return firstLetter + restOfString;
}

module.exports = capitalize;