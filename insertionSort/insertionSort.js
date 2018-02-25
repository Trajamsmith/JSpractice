//this method is wonky and convoluted, but I was trying to take the subarray concept literally
//in the form of an output array

let insert = function (array, rightIndex, value) {
    let indexToInsert;
    if (array.length === 0 || value > array[rightIndex]) {
        array.push(value);
    } else {
        for ( let i = rightIndex; i >= 0 && array[i] > value; i--) {
            array[i + 1] = array[i];
            indexToInsert = i;
        }
        array[indexToInsert] = value;
    }
    return array;
}

var insertionSort = function(array) {
    let output = [array[0]];
    for(var i = 0; i < array.length; i++) {
        insert(output, i, array[i + 1]);
        console.log(output);
    }
    return output;
};

insertionSort([4,8,2,13,9,19,4]);
insertionSort([1004,56,89,72,546,8924,3,-1]);