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

function caesarCipher(input, offset)
{
    function Range(min, max)
    {
        this.min = min;
        this.max = max;
        this.inRange = inRange;
        function inRange(letter) { 
            const code = letter.charCodeAt(0);
            return code >= this.min && code <= this.max;
        };
    }
    const lowercaseRange = new Range(97, 122);
    const uppercaseRange = new Range(65, 90);

    function getCipheredLetter(letter, offset)
    {
        let letterRange = null;

        if(lowercaseRange.inRange(letter))
        {
            letterRange = lowercaseRange;
        }
        else if(uppercaseRange.inRange(letter))
        {
            letterRange = uppercaseRange;
        }
        else
        {
            //Do not shift if not a letter
            return letter;
        }

        let newLetterCode = letter.charCodeAt(0) + offset;

        if(newLetterCode > letterRange.max)
        {
            newLetterCode = letterRange.min + (newLetterCode - letterRange.max - 1);
        }

        return String.fromCharCode(newLetterCode);
    }

    return input.split('').map((letter) => getCipheredLetter(letter, offset)).join('');
}

function analyzeArray(array)
{
    let averageValue = 0;

    if(array.length !== 0)
    {
        const sum = array.reduce((acc, currVal) => { return acc + currVal}, 0);
        averageValue = sum / array.length;
    }

    return {
            average: averageValue,
            min: array.reduce((acc, currVal) => {return Math.min(acc, currVal)}, array.length > 0? array[0] : 0),
            max: array.reduce((acc, currVal) => {return Math.max(acc, currVal)}, array.length > 0? array[0] : 0),
            length: array.length
        };
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};