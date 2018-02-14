function randomNumber(min,max) {
    if(isNaN(min) === true || isNaN(max) === true) {
        throw new Error('Both arguments must be numbers');
    } else {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }
}

console.log(randomNumber(57,102));
console.log(randomNumber('nine',102));