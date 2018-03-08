//this script takes a square matrix of any size and returns the values of the arrays
//in a clockwise spiral

outerSides = function(array) {
    let outputArray = [];

    for (let i = 0; i < array[0].length; i++) {
      outputArray.push(array[0][i]);
    }
    for (let j = 0; j < (array[0].length - 1); j++) {
      outputArray.push(array[j + 1][array[0].length - 1]);
    }
    for (let j = 0; j < (array[0].length - 1); j++) {
      outputArray.push(array[array[0].length - 1][array[0].length - 2 - j]);
    }
    for (let j = 0; j < (array[0].length - 2); j++) {
      outputArray.push(array[array[0].length - 2 - j][0]);
    }

    return outputArray;
}

//-----------------------------------------------------------------
shedOuterLayer = function(array) {
    let dupl = array.slice(0, array.length);
    let inner = array;

    inner.splice(0, 1);
    inner.splice(dupl[0].length - 2, 1);
    for (let j = 0; j < (dupl[0].length - 2); j++) {
      inner[j].splice((dupl[0].length - 1), 1);
    }
    for (let j = 0; j < (dupl[0].length - 2); j++) {
      inner[dupl[0].length - 3 - j].splice(0, 1);
    }

    return inner;
  }


//-----------------------------------------------------------------
twoByTwo = function(array) {
    let outputArray = [];

    outputArray.push(array[0][0]);
    outputArray.push(array[0][1]);
    outputArray.push(array[1][1]);
    outputArray.push(array[1][0]);
    return outputArray;
  }



//-----------------------------------------------------------------
let outputArray = [];
snail = function(array) {

    if (array.length === 1) {
      outputArray.push(array[0]);
      return [].concat.apply([], outputArray);
    }

    if (array.length === 2) {
      outputArray.push(twoByTwo(array));
      return [].concat.apply([], outputArray);
    }

    outputArray.push(outerSides(array));
    snail(shedOuterLayer(array));

    return [].concat.apply([], outputArray);
  }


//-----------------------------------------------------------------
array = [[1, 2, 3, 4, 5, 6, 7],
          [24, 25, 26, 27, 28, 29, 8],
          [23, 40, 41, 42, 43, 30, 9],
          [22, 39, 48, 49, 44, 31, 10],
          [21, 38, 47, 46, 45, 32, 11],
          [20, 37, 36, 35, 34, 33, 12],
          [19, 18, 17, 16, 15, 14, 13]]

console.log(snail(array));