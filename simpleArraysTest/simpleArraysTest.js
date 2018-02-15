//initialize variables
var questionsList = [
    ['When did Gandhi die?', 1948],
    ['When did Stalin die?', 1953],
    ['When did Sukarno die?', 1970]
]

var correctAnswers = [];
var incorrectAnswers = [];


//print to the DOM the list of questions answered correctly/incorrectly
function printList(list, listTitle) {
    document.write("<h2>" + listTitle + "</h2>");
    for (var i = 0; i < list.length; i += 1) {
        document.write("<p>" + list[i] + "</p><br>");
    }
    document.write("<br><br>");
}


//the quiz itself
for ( var i = 0; i < questionsList.length; i += 1 ) {
    var answer = prompt(questionsList[i][0]);
    if ( parseInt(answer) === questionsList[i][1]) {
        correctAnswers.push(questionsList[i][0]);
    } else {
        incorrectAnswers.push(questionsList[i][0]);
    }
}


//printing to DOM
if (correctAnswers.length === 1 ) {
    document.write("<h2>You got 1 answer correct!</p><br>")
} else {
    document.write("<h2>You got " + correctAnswers.length + " answers correct!</p><br>")
}
printList(correctAnswers, "Correct Answers");
printList(incorrectAnswers, "Incorrect Answers");