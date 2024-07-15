let sent = ['Je suis un développeur', 'Je suis passioné', 'Je suis badiste', 'Je suis motivé', 'Je suis efficace'];
let changingText = document.getElementById('changing-text');
let currentWordIndex = 0;

function changeWord() {
    changingText.style.opacity = '0';

    setTimeout(function() {
        changingText.textContent = sent[currentWordIndex];

        changingText.style.opacity = '1';

        currentWordIndex++;
        currentWordIndex = currentWordIndex % sent.length;

        if (currentWordIndex === words.length) {
            currentWordIndex = 0;
        }
    }, 500);
}

changingText.textContent = sent[currentWordIndex];
currentWordIndex++;
setInterval(changeWord, 3000);

let words = ["passion", "progression", "leadership", "projets", "POO", "équipe", "avancées", "innovations", "avenir", "profondeur", "sécurité", "impact"];
let circle = document.getElementById('circle');
let radius = circle.offsetWidth / 2;

window.addEventListener('resize', function() {
    radius = circle.offsetWidth / 2;
});

function getRandomPositionAndSpeed(radius) {
    let angle = Math.random() * 2 * Math.PI;
    let speed = + Math.random() * 0.01; // Vitesse aléatoire entre 0.01 et 0.02
    let x = radius + radius * Math.cos(angle);
    let y = radius + radius * Math.sin(angle);
    return {x, y, speed, angle};
}

function animateWord(wordElement, positionAndSpeed) {
    let {x, y, speed, angle} = positionAndSpeed;
    wordElement.style.position = 'absolute';

    setInterval(function() {
        angle += speed;
        x = radius + radius * Math.cos(angle) - wordElement.offsetWidth / 2;
        y = radius + radius * Math.sin(angle) - wordElement.offsetHeight / 2;
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;
    }, 1000 / 60); // 60 FPS
}

words.forEach(word => {
    let wordElement = document.createElement('div');
    wordElement.textContent = word;
    wordElement.classList.add('circle-word');
    circle.appendChild(wordElement);

    let positionAndSpeed = getRandomPositionAndSpeed(radius);
    animateWord(wordElement, positionAndSpeed);
});