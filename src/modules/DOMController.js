export default class DOMController {
    static renderStartScreen() {
        const body = document.querySelector('body');
        const startMenuScreen = document.createElement('div');
        const title = document.createElement('div');
        const instruction = document.createElement('div');
        const buttonContainer = document.createElement('div');
        const startButton = document.createElement('button');
        const checkboxContainer = document.createElement('div');
        const checkbox = document.createElement('input');
        const checkBoxText = document.createElement('div');

        startMenuScreen.classList.toggle('start-menu');
        title.classList.toggle('title');
        instruction.classList.toggle('instruction');
        buttonContainer.classList.toggle('btn-cont');
        startButton.classList.toggle('start-btn');
        checkboxContainer.classList.toggle('ai');

        title.textContent = 'Battleship';
        instruction.textContent = 'Click the button below to start the game';
        startButton.textContent = 'Start Game';
        checkbox.type = 'checkbox';
        checkbox.id = 'play-ai';
        checkBoxText.textContent = 'Play with AI?'

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(checkBoxText);
        buttonContainer.appendChild(startButton);
        buttonContainer.appendChild(checkboxContainer);
        startMenuScreen.appendChild(title);
        startMenuScreen.appendChild(instruction);
        startMenuScreen.appendChild(buttonContainer);

        body.innerHTML = '';
        body.appendChild(startMenuScreen);
    }
}