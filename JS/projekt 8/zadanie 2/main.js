// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
let indexLetter = 0;
let indexText = 0;
let textTyping = undefined;

const LettersAdd = () => {
    spnText.textContent += txt[indexText][indexLetter];
    indexLetter++;
    if (indexLetter === txt[indexText].length) {
        clearInterval(textTyping);
        setTimeout(() => {

            indexText++;
            indexLetter = 0;
            if (indexText < txt.length) {
                addLetter();
                spnText.textContent = "";
            }
        }, 1500);

    }
}
// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout

    textTyping = setInterval(LettersAdd, 50);
}
setTimeout(addLetter, 1500); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);