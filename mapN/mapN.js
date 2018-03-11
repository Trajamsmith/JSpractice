//building out a map-like function that works for a number of different argument inputs

function mapN() {
    let output = [];
    let argumentsArray = [];
    for (let j = 0; j < arguments.length - 1; j++) {
      argumentsArray.push(arguments[j]);
    }
    for (let k = 0; k < argumentsArray[0].length; k++) {
      let tempArray = [];
        for (let m = 0; m < argumentsArray.length; m++) {
          tempArray.push(argumentsArray[m][k]);
        }
      output.push(arguments[arguments.length - 1].apply(null, tempArray));
    }
    return output;
}

function multiply(element1, element2, element3) {
    return element1 * element2 * element3;
}

function addTogether(element1, element2, element3, element4) {
    return element1 + element2 + element3 + element4;
}

console.log(mapN([1,2,3], [3,4,5], [1,4,7], multiply));

console.log(mapN([1,2,3], [3,4,5], [1,4,7], [7,8,9], addTogether));