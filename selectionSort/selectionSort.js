function swapArrayElements (array, firstIndex, secondIndex) {
    let hold = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = hold;
    console.log(array);
}

swapArrayElements([0,1,2,3,4], 3, 4);

function subArrayMinIndex (array, startIndex) {
    let first = array[startIndex];
    let smallest = first;
    let indexSmallest = startIndex;
    for ( let i = startIndex + 1; i < array.length; i++) {
        if ( array[i] < smallest) {
            smallest = array[i];
            indexSmallest = i;
        }
    }
    return indexSmallest;
}

subArrayMinIndex([4,5,17,7,8,12],0);

function selectionSort (array) {
    let smallestIndex;
    for ( let i = 0; i < array.length; i++){
        smallestIndex = subArrayMinIndex(array, i);
        swapArrayElements(array, i, smallestIndex);
    }
    console.log(array);
}

selectionSort([1,7,6,5,12,4]);