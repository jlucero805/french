//vars scores
var correctScore = 0;
var incorrectScore = 1;
var racha = 0;

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
        if (incorrectScore == 1) {
            correctScore++;
        };
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

//shifters

var body = document.getElementById('body');

var girlArray = [
    0 /*frenchGirl.jpg*/,
    1 /*aestheticGirl.png*/,
    2 /*animeGirl.png*/,
    3 /**balconyGirl.png */,
    4 /**studyGirl.jpg */
]

var girlIndex = 0;

function shiftLeft() {
    var temp;
    girlIndex--;
    if (girlIndex == -1) {
        girlIndex = 4;
    };
    if (girlIndex == 4) {
        body.style.backgroundImage = "url(studyGirl.jpg)";
    };
    if (girlIndex == 3) {
        body.style.backgroundImage = "url('balconyGirl.png')"
    };
    if (girlIndex == 2) {
        body.style.backgroundImage = "url('animeGirl.png')"
    };
    if (girlIndex == 1) {
        body.style.backgroundImage = "url('aestheticGirl.png')"
    };
    if (girlIndex == 0) {
        body.style.backgroundImage = "url('frenchGirl.jpg')"
    };
    console.log("click " + girlIndex)
};

function shiftRight() {
    girlIndex++;
    if (girlIndex == 5) {
        girlIndex = 0;
    };
    if (girlIndex == 4) {
        body.style.backgroundImage = "url(studyGirl.jpg)";
    };
    if (girlIndex == 3) {
        body.style.backgroundImage = "url('balconyGirl.png')"
    };
    if (girlIndex == 2) {
        body.style.backgroundImage = "url('animeGirl.png')"
    };
    if (girlIndex == 1) {
        body.style.backgroundImage = "url('aestheticGirl.png')"
    };
    if (girlIndex == 0) {
        body.style.backgroundImage = "url('frenchGirl.jpg')"
    };
};

var musicc = document.getElementById('music')

function clicks() {
    musicc.play();
    console.log('music play')
};

console.log('end')