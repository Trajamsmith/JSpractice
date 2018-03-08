let quickSort = function(array) {
    let pivot = array[0];
    if (array.length < 2) {
        return array;
    } else {
        leftArray = [];
        rightArray = [];
        for ( let i = 1; i < array.length; i++ ) {
            if (array[i] < pivot) {
                leftArray.push(array[i]);
            } else {
                rightArray.push(array[i]);
            }
        }
    }

    console.log(leftArray);
    console.log(rightArray);
    return quickSort(leftArray) + pivot + quickSort(rightArray);

}

console.log(quickSort([14,6,35,8,9,12,2,3]));
//output's not an array but it is sorted