//vars
var correctScore = 0;
var incorrectScore = 3;

//arrays
var verbsPresentFrench = [
    [
        ['être', 'suis', 'es', 'est', 'sommes', 'êtes', 'sont'],
        ["ser", "soy", "eres", "es", "somos", "uds son", "ellos son"]
    ],
    [
        ["avoir", "ai", "as", "a", "avons", "avez", "ont"],
        ["tener", "tengo", "tienes", "tiene", "tenemos", "uds tienen", "ellos tienen"]
    ]
];

var consoleArray = [];

//random number generator
var rand1 = Math.floor(Math.random() * (verbsPresentFrench.length));
var rand2 = Math.floor(Math.random() * 7);

var question = document.getElementById("question");
var answer = document.getElementById('answer');
var enter = document.getElementById('enter');
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");

question.innerHTML = verbsPresentFrench[rand1][1][rand2];
correct.innerHTML = correctScore;
incorrect.innerHTML = "intentos: " + incorrectScore;
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        submit();
        console.log("funciona")
    };
});
answer.focus();

//hits enter
function submit() {
    var tempText = answer.value;
    var tempString = String(tempText);
    if (tempString == verbsPresentFrench[rand1][0][rand2]) {
        rand1 = Math.floor(Math.random() * (verbsPresentFrench.length));
        rand2 = Math.floor(Math.random() * 7);
        question.innerHTML = verbsPresentFrench[rand1][1][rand2];
        answer.value = "";
        correctScore++;
        correct.innerHTML = correctScore;
        incorrectScore = 3;
        incorrect.innerHTML = "intentos: " + incorrectScore;
        answer.focus();
    } else {
        console.log("wrong! " + verbsPresentFrench[rand1][0][rand2]);
        answer.value = "";
        incorrectScore--;
        incorrect.innerHTML = "intentos: " + incorrectScore;
        answer.focus();
        if (incorrectScore <= 1) {
            incorrect.innerHTML = "respuesta: " + verbsPresentFrench[rand1][0][rand2];
        }
    };
};