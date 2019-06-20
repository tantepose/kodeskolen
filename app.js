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
var points = 0;
var log = [];
var calculation;

// nettsiden lastes
window.onload = function () {
    startTimer(30);
    document.getElementById('guess').focus();

    calculation = new Addition(10, 10);
    document.getElementById('question').innerHTML = calculation.question;
}

// form sendes inn når enter trykkes
document.getElementById('question-form').onsubmit = function (event) {
    event.preventDefault();
    var guess = document.getElementById('guess').value;

    if (guess != '') {
        if (guess == calculation.answer) {
            log.push(calculation.question + calculation.answer + ' ✔️');
            adjustPoints(1);
        } else {
            log.push(calculation.question + calculation.answer + ' ❌');
            adjustPoints(-1);
        }

        calculation = new Addition(20, 20);
        document.getElementById('question').innerHTML = calculation.question;
        document.getElementById('guess').value = '';
    }
}

// lage nytt spørsmålsobjekt
function Addition (range1, range2) {
    var number1 = Math.floor(Math.random() * range1);
    var number2 = Math.floor(Math.random() * range2);
    
    this.question = number1 + ' + ' + number2 + ' = ';
    this.answer = number1 + number2;
}

// gi eller ta poeng
function adjustPoints (value) {
    points = points + value;
    document.getElementById('score').innerHTML = points;
}

// starte timer
function startTimer (seconds) {
    var timer = setInterval(function () {
        seconds--;
        document.getElementById('time').innerHTML = seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

// spillet er over
function gameOver () {
    document.getElementById('gameplay').style.display = 'none';
    document.getElementById('gameover').style.display = 'block';
    document.getElementById('gameover-points').innerHTML = 'Du fikk ' + points + " / " + log.length + ' poeng.';

    log.forEach(function (item) {
        document.getElementById('gameover-log').innerHTML += '<li>' + item + '</li>';
    });
}