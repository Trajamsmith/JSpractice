let answerArray = ["ROCK", "PAPER", "SCISSORS"];

//counters
let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfTies = 0;

//best of five loop
for ( let i = 0; i < 5; i += 1 ) {
    alert("Five rounds, let's play!");

    //player selection
    let playerSelection = prompt("Pick rock, paper, or scissors.");
    console.log(playerSelection);
    let capitalizedPS = playerSelection.toUpperCase();
    console.log(capitalizedPS);

    //computer selection
    let computerSelection = answerArray[Math.floor(Math.random() * answerArray.length)];
    console.log(computerSelection);

    //game conditionals
    if ( capitalizedPS === "ROCK" && computerSelection === "ROCK") {
        alert("You both selected rock, it's a tie");
        numberOfTies += 1;
    } else if (capitalizedPS === "ROCK" && computerSelection === "SCISSORS") {
        alert("Computer selected scissors, you win");
        numberOfWins += 1;
    } else if (capitalizedPS === "ROCK" && computerSelection === "PAPER") {
        alert("Computer selected paper, you lose");
        numberOfLosses += 1;
    } else if (capitalizedPS === "PAPER" && computerSelection === "ROCK") {
        alert("Computer selected rock, you win");
        numberOfWins += 1;
    } else if (capitalizedPS === "PAPER" && computerSelection === "PAPER") {
        alert("You both selected paper, it's a tie");
        numberOfTies += 1;
    } else if (capitalizedPS === "PAPER" && computerSelection === "SCISSORS") {
        alert("Computer selected scissors, you lose");
        numberOfLosses += 1;
    } else if (capitalizedPS === "SCISSORS" && computerSelection === "ROCK") {
        alert("Computer selected rock, you lose");
        numberOfLosses += 1;
    } else if (capitalizedPS === "SCISSORS" && computerSelection === "PAPER") {
        alert("Computer selected paper, you win");
        numberOfWins += 1;
    } else if (capitalizedPS === "SCISSORS" && computerSelection === "SCISSORS") {
        alert("You both selected scissors, it's a tie");
        numberOfTies += 1;
    } else {
        alert("You didn't enter an available option, try again");
        i = i - 1;
    };
};

document.write("<h2>You won " + numberOfWins + " time(s).</h2>");
document.write("<h2>You lost " + numberOfLosses + " time(s).</h2>");
document.write("<h2>You tied " + numberOfTies + " time(s).</h2>");