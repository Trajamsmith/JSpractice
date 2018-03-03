//recursive array sum
let sum = function(array) {
    if ( array.length === 0 ) {
        return 0;
    } else {
        return array[0] + sum(array.slice(1, array.length));
    }
}

console.log(sum([1,3,5,7,9]));


//recursive count number of items in a list
let count = function(array) {
    if ( array.length === 0) {
        return 0;
    } else {
        return 1 + count(array.slice(1, array.length));
    }
}

console.log(count([1,1,1,1,1,1,1,1,1,1,1,1]));


//recursive binary search
let binarySearch = function(array, target) {
    middle = Math.floor(array.length / 2);
    if (array[middle] === target) {
        console.log("found");
        return middle
    } else if (array[middle] > target) {
        binarySearch(array.slice(0,middle),target);
    } else {
        binarySearch(array.slice(middle + 1, array.length),target);
    }
}

binarySearch([1,3,5,7,8,10,11],11);