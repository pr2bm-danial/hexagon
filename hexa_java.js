const hexagons = document.querySelectorAll('.hex');
const goalValueSpan = document.getElementById('goal-value');
const startButton = document.getElementById('start-button');

let goalValue = 0;
let gameStarted = false;

let clock = document

// Funktion zum Starten des Spiels
function startGame() {
    if (!gameStarted) {
        goalValueSpan.textContent = "?";
        gameStarted = true;
        startButton.disabled = true; // Deaktiviere den Start-Button, um wiederholtes Starten zu verhindern
        generateNumbers();
        setTimeout(showGoalValue, 35000); // Den Zielwert nach 35 Sekunden anzeigen
        setTimeout(coverNumbers, 35000); // Die Zahlen nach 35 Sekunden mit Buchstaben ersetzen
    }
}

// Funktion zum Generieren von 19 zufälligen Zahlen zwischen 1 und 5 und Anzeigen im Spielfeld
function generateNumbers() {
    for (let i = 0; i < hexagons.length; i++) {
        const randomNumber = Math.floor(Math.random() * 3) + 1; // Zufällige Zahl von 1 bis 3
        hexagons[i].innerHTML = `<div class="number">${randomNumber}</div>`;
    }
}

// Funktion zum Anzeigen des Zielwerts zwischen 5 und 10
function showGoalValue() {
    goalValue = Math.floor(Math.random() * 4) + 4; // Zufälliger Zielwert von 4 bis 8
    goalValueSpan.textContent = goalValue;
    startButton.disabled = false; // Aktiviere den Start-Button nach 30 Sekunden wieder
    gameStarted = false; // Setze den Spielstatus zurück
}

// Funktion zum Verdecken der Zahlen mit Buchstaben
function coverNumbers() {
    for (let i = 0; i < hexagons.length; i++) {
        hexagons[i].innerHTML = `<div class="number">${String.fromCharCode(65 + i)}</div>`;
    }
}

// Eventlistener für den Start-Button
startButton.addEventListener('click', startGame);

// Funtion zum Starten des Timers
let timer;
function countdown() {
const startButton = document.getElementById('start-button');
startButton.disabled = true;
let seconds = 35;
const timerElement = document.getElementById('some_div');
timer = setInterval(function() {
    seconds--;
    let secondString = seconds.toString().padStart(2, "0") // Wenn Sekunden unter 10 laufen mit einem Null ausgleichen, sodass die Sekunden zweistellig angezeigt werden //
    timerElement.textContent = `00:${secondString} Sekunden`;
    if (seconds < 0) {
        clearInterval(timer);
        timerElement.textContent = 'Zeit abgelaufen!';
        startButton.disabled = false;}
        }, 1000);
    }

