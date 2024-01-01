export default class DOMController {
  static renderStartScreen() {
    const body = document.querySelector("body");
    const startMenuScreen = document.createElement("div");
    const title = document.createElement("div");
    const instruction = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const startButton = document.createElement("button");
    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    const checkBoxText = document.createElement("div");

    startMenuScreen.classList.toggle("start-menu");
    title.classList.toggle("title");
    instruction.classList.toggle("instruction");
    buttonContainer.classList.toggle("btn-cont");
    startButton.classList.toggle("start-btn");
    checkboxContainer.classList.toggle("ai");

    title.textContent = "Battleship";
    instruction.textContent = "Click the button below to start the game";
    startButton.textContent = "Start Game";
    checkbox.type = "checkbox";
    checkbox.id = "play-ai";
    checkBoxText.textContent = "Play with AI?";

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkBoxText);
    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(checkboxContainer);
    startMenuScreen.appendChild(title);
    startMenuScreen.appendChild(instruction);
    startMenuScreen.appendChild(buttonContainer);

    body.innerHTML = "";
    body.appendChild(startMenuScreen);
  }

  static renderGameScreen(size) {
    const body = document.querySelector("body");
    const gameScreen = document.createElement("div");
    const gameBoard = document.createElement("div");
    const infomation = document.createElement("div");
    const player = document.createElement("div");
    const playerName = document.createElement("span");
    const text = document.createElement("span");
    const comment = document.createElement("div");

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let grid = document.createElement("div");
        grid.classList.toggle("grid");
        grid.dataset.row = i;
        grid.dataset.column = j;
        gameBoard.appendChild(grid);
      }
    }

    gameScreen.classList.toggle("game-screen");
    gameBoard.classList.toggle("game-board");
    infomation.classList.toggle("information");
    player.classList.toggle("player");
    playerName.classList.toggle("player-name");
    comment.classList.toggle("comment");

    playerName.textContent = "Player 1";
    text.textContent = " turn";
    player.appendChild(playerName);
    player.appendChild(text);
    comment.textContent = "Click on any grid to play turn";
    infomation.appendChild(player);
    infomation.appendChild(comment);
    gameScreen.appendChild(gameBoard);
    gameScreen.appendChild(infomation);

    body.innerHTML = "";
    body.appendChild(gameScreen);
  }

  static renderPlaceShipScreen(size) {
    const placeShipScreen = document.createElement("div");
    const gameBoard = document.createElement("div");
    const comment = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const confirmBtn = document.createElement("button");
    const resetBtn = document.createElement("button");

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let grid = document.createElement("div");
        grid.classList.toggle("grid");
        grid.dataset.row = i;
        grid.dataset.column = j;
        gameBoard.appendChild(grid);
      }
    }

    placeShipScreen.classList.toggle("place-ship-screen");
    gameBoard.classList.toggle("game-board");
    comment.classList.toggle("comment");
    buttonContainer.classList.toggle("btn-cont");
    confirmBtn.classList.toggle("confirm");
    resetBtn.classList.toggle("reset");

    comment.textContent = "Select any grid to place ship";
    confirmBtn.textContent = "Confirm Placement";
    resetBtn.textContent = "Reset";

    buttonContainer.appendChild(confirmBtn);
    buttonContainer.appendChild(resetBtn);

    placeShipScreen.appendChild(gameBoard);
    placeShipScreen.appendChild(comment);
    placeShipScreen.appendChild(buttonContainer);

    const body = document.querySelector("body");
    body.innerHTML = "";
    body.appendChild(placeShipScreen);
  }

  static renderGameBoard(gameBoardArray) {
    const size = gameBoardArray.length;
    const gameBoard = document.querySelector(".game-board");
    gameBoard.innerHTML = '';
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let grid = document.createElement("div");
        grid.classList.toggle("grid");
        if (gameBoardArray[i][j] === 0) grid.classList.toggle("miss");
        else if (gameBoardArray[i][j] === 1) grid.classList.toggle("hit");
        else if (typeof(gameBoardArray[i][j]) === 'object') grid.classList.toggle('ship');
        grid.dataset.row = i;
        grid.dataset.column = j;
        gameBoard.appendChild(grid);
      }
    }
  }
}
