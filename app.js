// konfigurasjon
const range1 = 30;
const range2 = 20;

let points = 0;
let answer;
let timer;

// nettsiden lastes
window.onload = function () {
    getQuestion();
    startTimer(60);
    document.getElementById('guess').focus();
}

// form sendes inn når enter trykkes
document.getElementById('question-form').onsubmit = function (event) {
    event.preventDefault();
    let guess = document.getElementById('guess').value;

    if (guess == answer) {
        adjustPoints(1);
    } else {
        adjustPoints(-1);
    }
    
    getQuestion();
    document.getElementById('guess').value = '';
}

// lage nytt spørsmål
function getQuestion () {
    let number1 = Math.floor(Math.random() * range1);
    let number2 = Math.floor(Math.random() * range2);
    
    let question = number1 + ' + ' + number2 + ' = ';
    answer = number1 + number2;

    document.getElementById('question').innerHTML = question;
}

// gi eller ta poeng
function adjustPoints (value) {
    points = points + value;
    document.getElementById('score').innerHTML = points + ' poeng';
}

// starte timer
function startTimer (totalSeconds) {
    let secondsLeft = totalSeconds;

    timer = setInterval(function () {
        secondsLeft--;
        document.getElementById('time').innerHTML = secondsLeft;

        if (secondsLeft <= 0) {
            gameOver();
        }

    }, 1000);
}

// spillet er over
function gameOver () {
    clearInterval(timer);
}