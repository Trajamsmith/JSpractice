let merge = function(array, startIndex, middleIndex, endIndex) {
    let firstHalf = [];
    let secondHalf = []

    k = startIndex;

    //split the big array down the middle into the two subarrays
    for ( let i = 0; k <= middleIndex; i++, k++ ) {
        firstHalf[i] = array[k];
    }
    for ( let j = 0; k <= endIndex; j++, k++ ) {
        secondHalf[j] = array[k];
    }

    //indices for comparisons
    k = startIndex;
    let i = 0;
    let j = 0;

    //compare first half and second half elements, add to the array
    //(which is now metaphorically empty, though still has original elements)
    while( i <= (middleIndex - startIndex) && j <= (endIndex - middleIndex - 1)) {
        if ( firstHalf[i] < secondHalf[j]) {
            array[k] = firstHalf[i];
            i++;
        } else {
            array[k] = secondHalf[j];
            j++;
        }
        k++;
    }

    //if either half reaches its end the above loop stops, the following code will dump
    //whatever's left of the remaining array into the sorted array
    while( i <= (middleIndex - startIndex)) {
        array[k] = firstHalf[i];
        k++;
        i++;
    }
    while( j <= (endIndex - middleIndex - 1)) {
        array[k] = secondHalf[j];
        k++;
        j++;
    }

    return array;
}


//the recursive mergeSort function
let mergeSort = function(array, startIndex, endIndex) {
    if ( endIndex > startIndex ) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        mergeSort(array, startIndex, middleIndex);
        mergeSort(array, (middleIndex + 1), endIndex);
        merge(array, startIndex, middleIndex, endIndex);
    }

    return array;
};

console.log(mergeSort([3,6,9,8,9,2,5,6],0,7));
console.log(mergeSort([3,6,19,8,9,12,5,16],0,7));