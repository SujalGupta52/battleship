/* eslint-disable no-use-before-define */
import DOMController from "./modules/DOMController.js";
import GameBoard from "./modules/GameBoard.js";

let player1 = new GameBoard(10);
let player2 = new GameBoard(10);

let ai = false;
let rotation = "h";
const shipArray = [2];
let temp = [...shipArray]; // index + 1 = size of ship, value = no of ship
let currentPlayer = player1;
startGame();

function restartGame() {
  player1 = new GameBoard(10);
  player2 = new GameBoard(10);
  temp = [...shipArray];
  currentPlayer = player1;
  startGame();
}

function hoverHandler(e) {
  DOMController.showValidPlacement(
    currentPlayer,
    temp.length,
    [+e.target.dataset.row, +e.target.dataset.column],
    rotation
  );
}

function clickHandler(e) {
  const size = temp.length;
  const row = +e.target.dataset.row;
  const column = +e.target.dataset.column;
  rotation = Math.floor(Math.random() * (10 - 0)) + 0 < 5 ? "h" : "v";
  const flag = currentPlayer.placeShip(size, rotation, [row, column]);
  if (flag) {
    temp[temp.length - 1] -= 1;
    if (temp[temp.length - 1] === 0) temp.pop();
  }
  placeShipHandler();
}

function hitHandler(e) {
  console.log(currentPlayer === player1 ? "player1" : "player2");
  const enemyPlayer = currentPlayer === player1 ? player2 : player1;
  enemyPlayer.receiveHit([+e.target.dataset.row, +e.target.dataset.column]);
  DOMController.renderGameBoard(enemyPlayer.getBoard(), true);
  setTimeout(() => {
    document.querySelector(".player-name").textContent =
      currentPlayer === player1 ? "Player 2" : "Player 1";
    if (ai === true) {
      currentPlayer.autoHit();
      DOMController.renderGameBoard(currentPlayer.getBoard());
      document.querySelector(".player-name").textContent = "AI";
      setTimeout(() => {
        DOMController.renderGameBoard(enemyPlayer.getBoard(), true);
        DOMController.addListenerGrid("click", hitHandler);
        document.querySelector(".player-name").textContent = "Player 1";
      }, 2000);
    } else {
      DOMController.renderGameBoard(currentPlayer.getBoard(), true);
      DOMController.addListenerGrid("click", hitHandler);
      togglePlayer();
    }
  }, 2000);
  if (player1.isShipsSunk()) {
    document.querySelector(".player").textContent =
      "Player 2 won, all ships destroyed";
    document.querySelector(".comment").textContent = "";
    setTimeout(startGame, 3000);
  } else if (player2.isShipsSunk()) {
    document.querySelector(".player").textContent =
      "Player 1 won, all ships destroyed";
    document.querySelector(".comment").textContent = "";
    setTimeout(restartGame, 5000);
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function gameScreenHandler() {
  if (ai === true || currentPlayer === player2) {
    DOMController.renderGameScreen(10);
    if (currentPlayer === player2) {
      DOMController.renderGameBoard(currentPlayer.getBoard(), true);
      DOMController.addListenerGrid("click", hitHandler);
      togglePlayer();
    } else {
      DOMController.renderGameBoard(player2.getBoard(), true);
      DOMController.addListenerGrid("click", hitHandler);
    }
  } else {
    temp = [...shipArray];
    togglePlayer();
    placeShipHandler();
  }
}

function resetBoard() {
  if (currentPlayer === player1) {
    player1 = new GameBoard(10);
    currentPlayer = player1;
  } else {
    player2 = new GameBoard(10);
    currentPlayer = player2;
  }
  temp = [...shipArray];
  placeShipHandler();
}

function placeShipHandler() {
  DOMController.renderPlaceShipScreen(10);
  if (currentPlayer === player1)
    document.querySelector("span.player-name").textContent = "Player 1";
  else document.querySelector("span.player-name").textContent = "Player 2";
  DOMController.renderGameBoard(currentPlayer.getBoard());
  DOMController.addListenerGrid("mouseover", hoverHandler);
  DOMController.addListenerGrid("touchmove", hoverHandler);
  DOMController.addListenerGrid("click", clickHandler);
  if (temp.length === 0) {
    document
      .querySelector(".confirm")
      .addEventListener("click", gameScreenHandler);
    document.querySelector(".reset").addEventListener("click", resetBoard);
  }
}

function startGame() {
  DOMController.renderStartScreen();
  const startButton = document.querySelector(".start-btn");

  startButton.addEventListener("click", () => {
    ai = document.querySelector("input").checked;
    if (ai === true) player2.autoPlaceShip(shipArray);
    placeShipHandler();
  });
}
