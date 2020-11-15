//vars scores
var correctScore = 0;
var incorrectScore = 1;

//arrays
var pronounArray = [' ', 'je', 'tu', 'il/elle/on', 'nous', 'vous', 'ils/elles'];

var consoleArray = [];

//random number generator
var rand1 = Math.floor(Math.random() * (verbsPresentFrench.length));
var rand2 = Math.floor(Math.random() * 7);

var question = document.getElementById("question");
var answer = document.getElementById('answer');
var enter = document.getElementById('enter');
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var pronouns = document.getElementById('pronouns');

question.innerHTML = verbsPresentFrench[rand1][1][rand2];
correct.innerHTML = correctScore;
incorrect.innerHTML = "intentos: " + incorrectScore;
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        submit();
        console.log("funciona")
    };
});
pronouns.innerHTML = pronounArray[rand2];
answer.focus();

//hits enter
function submit() {
    var tempText = answer.value;
    var tempLowerCase = String(tempText);
    var tempString = tempLowerCase.toLowerCase();
    if (tempString == verbsPresentFrench[rand1][0][rand2]) {
        rand1 = Math.floor(Math.random() * (verbsPresentFrench.length));
        rand2 = Math.floor(Math.random() * 7);
        question.innerHTML = verbsPresentFrench[rand1][1][rand2];
        answer.value = "";
        correctScore++;
        correct.innerHTML = correctScore;
        incorrectScore = 1;
        incorrect.innerHTML = "intentos: " + incorrectScore;
        pronouns.innerHTML = pronounArray[rand2];
        answer.focus();
    } else {
        console.log("wrong! " + verbsPresentFrench[rand1][0][rand2]);
        answer.value = "";
        incorrectScore--;
        incorrect.innerHTML = "intentos: " + incorrectScore;
        answer.focus();
        pronouns.innerHTML = pronounArray[rand2];
        if (incorrectScore <= 0) {
            incorrect.innerHTML = "respuesta: " + verbsPresentFrench[rand1][0][rand2];
        }
    };
};