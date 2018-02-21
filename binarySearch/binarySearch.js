const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let doSearch = function (list, targetValue) {
    let min = 0;
    let max = list.length - 1;
    var guess;
    let numberOfGuesses = 0;

    while ( list[guess] !== targetValue ) {
        console.log(min);
        console.log(max);
        guess = Math.floor((max - min)/2 + min);
        console.log(guess);

        if ( list[guess] === targetValue ) {
            return numberOfGuesses;
        } else if ( list[guess] < targetValue) {
            min = guess + 1;
            console.log('Guess too low')
            numberOfGuesses++;
        } else {
            max = guess - 1;
            console.log('Guess too high')
            numberOfGuesses++;
        }
    }
}