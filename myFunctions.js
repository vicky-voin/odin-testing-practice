function capitalize(input)
{
    let firstLetter = input.charAt(0);
    firstLetter = firstLetter.toUpperCase();

    const restOfString = input.slice(1);

    return firstLetter + restOfString;
}

function reverseString(input)
{
    return input.split('').reverse().join('');
}

const calculator = {
    add(a,b){ return a+b;},
    subtract(a,b){ return a-b;},
    divide(a,b){ return a/b;},
    multiply(a,b){ return a*b;},
}

module.exports = {capitalize, reverseString, calculator};