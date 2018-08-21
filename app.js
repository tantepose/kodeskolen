/* 
bør lære bort:
* variabler
* arrays
* enkel matte
* if-logikk
* funksjoner
* data inn
* data ut
* loops
*/

// globale variabler
var range1 = 30;
var range2 = 20;
var points = 0;
var question;
var answer;
var timer;
var log = [];

// nettsiden lastes
window.onload = function () {
    document.getElementById('gameover').style.display = 'none';
    getQuestion();
    startTimer(30);
    document.getElementById('guess').focus();
}

// form sendes inn når enter trykkes
document.getElementById('question-form').onsubmit = function (event) {
    event.preventDefault();
    let guess = document.getElementById('guess').value;

    if (guess != '') {
        if (guess == answer) {
            log.push(question + answer + ' ✔️');
            adjustPoints(1);
        } else {
            log.push(question + answer + ' ❌');
            adjustPoints(-1);
        }
        document.getElementById('guess').value = '';
        getQuestion();
    }
}

// lage nytt spørsmål
function getQuestion () {
    var number1 = Math.floor(Math.random() * range1);
    var number2 = Math.floor(Math.random() * range2);
    
    question = number1 + ' + ' + number2 + ' = ';
    answer = number1 + number2;

    document.getElementById('question').innerHTML = question;
}

// gi eller ta poeng
function adjustPoints (value) {
    points = points + value;
    document.getElementById('score').innerHTML = points + ' poeng';
}

// starte timer
function startTimer (seconds) {
    timer = setInterval(function () {
        seconds--;
        document.getElementById('time').innerHTML = seconds;
        if (seconds <= 0) {
            gameOver();
        }
    }, 1000);
}

// spillet er over
function gameOver () {
    clearInterval(timer);

    document.getElementById('gameplay').style.display = 'none';
    document.getElementById('gameover').style.display = 'block';
    document.getElementById('gameover-points').innerHTML = 'Du fikk ' + points + ' poeng.';

    log.forEach(function (item) {
        document.getElementById('gameover-log').innerHTML += '<li>' + item + '</li>';
    });
}