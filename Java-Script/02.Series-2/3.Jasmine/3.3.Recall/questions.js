let selectElementsStartingWithA = (array) => {
    const retArray = [];
    array.forEach(e => {
        if (e.substr(0, 1) === 'a') retArray.push(e);
    });
    return retArray;
}

let selectElementsStartingWithVowel = (array) => {
    const retArray = [];
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    array.forEach(e => {
        if (vowel.includes(e.substr(0, 1))) retArray.push(e);
    });
    return retArray;
}

let removeNullElements = (array) => {
    const retArray = [];
    array.forEach(e => {
        if (e !== null) retArray.push(e);
    });
    return retArray;
}

let removeNullAndFalseElements = (array) => {
    const retArray = [];
    array.forEach(e => {
        if (e !== null && e !== false) retArray.push(e);
    });
    return retArray;
}

let reverseWordsInArray = (array) => {
    const retArray = [];
    array.forEach(e => {
        retArray.push(e.split('').reverse().join(''));
    });
    return retArray;
}

let everyPossiblePair = (array) => {
    const retArray = [];
    array.sort();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i != j) retArray.push([array[i], array[j]]);
        }
    }
    return retArray;
}

let allElementsExceptFirstThree = (array) => {
    const retArray = [];
    for (let i = 3; i < array.length; i++) {
        retArray.push(array[i]);
    }
    return retArray;
}

let addElementToBeginning = (array, element) => {
    const retArray = [element];
    retArray.push(...array);
    return retArray;
}

let sortByLastLetter = (array) => {
    return reverseWordsInArray(reverseWordsInArray(array).sort());
}

let getFirstHalf = (string) => {
    return string.substr(0, Math.ceil(string.length / 2));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let count = 0;
    array.forEach(e => {
        const firstHalf = getFirstHalf(e);
        const lastHalf = getFirstHalf(e.split('').reverse().join(''));
        if (firstHalf === lastHalf) count++;
    });
    return count;
}

let shortestWord = (array) => {
    let word = null;
    array.forEach(e => {
        if (word === null || word.length > e.length) word = e;
    });
    return word;
}

let longestWord = (array) => {
    let word = null;
    array.forEach(e => {
        if (word === null || word.length < e.length) word = e;
    });
    return word;
}

let sumNumbers = (array) => {
    let sum = 0;
    array.forEach(e => {
        sum += e;
    });
    return sum;
}

let repeatElements = (array) => {
    array.push(...array);
    return array;
}

let stringToNumber = (string) => {
    return Number(string);
}

let calculateAverage = (array) => {
    return sumNumbers(array) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    const retArray = [];
    for (let i = 0; i <= array.length && array[i] <= 5; i++)
        retArray.push(array[i]);
    return retArray;
}

let convertArrayToObject = (array) => {
    const retObject = {};
    for (let i = 0; i < array.length; i += 2) {
        retObject[array[i]] = array[i + 1];
    }
    return retObject;
}

let getAllLetters = (array) => {
    const retArray = [];
    array.forEach(e => {
        retArray.push(...e);
    });
    return [...new Set(retArray.sort())];
}

let swapKeysAndValues = (object) => {
    const retObject = {};
    Object.keys(object).forEach(key => {
        retObject[object[key]] = key;
    });
    return retObject;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    Object.keys(object).forEach(key => {
        sum += Number(object[key]) + Number(key);
    });
    return sum;
}

let removeCapitals = (string) => {
    return string.replace(/(\b[A-Z])/g, '');
}


let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    const day = date.getDate();
    const month = date.getUTCMonth() + 1;
    const years = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${years}`;
}

let getDomainName = (string) => {
    return string.slice(string.indexOf("@") + 1, string.lastIndexOf('.'));
}

let titleize = (string) => {
    const retArray = string.split(' ');
    for (let i = 0; i < retArray.length; i++) {
        if (i === 0 || retArray[i].length > 3 || retArray[i - 1].indexOf('.') > 0) {
            retArray[i] = retArray[i].slice(0, 1).toUpperCase() + retArray[i].slice(1).toLowerCase();
        }
    }
    return retArray.join(' ');
}

let checkForSpecialCharacters = (string) => {
    return string.replace(/[a-zA-Z0-9]/g, '').length > 0;
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = (number) => {
    let facto = 1;
    for (let i = number; i > 1; i--) {
        facto *= i;
    }
    return facto;
}

let findAnagrams = (string) => {
    let anagram = [string];
    for (let x = 0; x < anagram.length; x++) {
        const base = anagram[x].split('');
        for (let i = 0; i < base.length; i++) {
            let ana = base[i];
            for (let j = 0; j < base.length; j++) {
                if (i != j) ana += base[j];
            }
            anagram.push(ana);
            anagram.push(reverseWordsInArray([ana])[0]);
        }
        anagram = [...new Set(anagram)];
    }
    return anagram;
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5 / 9));
}

let letterPosition = (array) => {
    const alphabet = [];
    array.forEach(e => {
        alphabet.push(e.toLowerCase().charCodeAt(0) - 96);
    });
    return alphabet;
}