function swapArrayElements (array, firstIndex, secondIndex) {
    let hold = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = hold;
    console.log(array);
}

swapArrayElements([0,1,2,3,4], 3, 4);

function subArrayMinIndex (array, startIndex) {

}