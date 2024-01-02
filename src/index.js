import DOMController from "./modules/DOMController.js";
import GameBoard from "./modules/GameBoard.js";

const player1 = new GameBoard(10);
const player2 = new GameBoard(10);

let ai = false;
const rotation = "v";
const shipArray = [2, 1, 1, 1, 1];

const currentPlayer = player1;
DOMController.renderStartScreen();
const startButton = document.querySelector(".start-btn");

function placeShipHandler() {
  DOMController.renderPlaceShipScreen(10);
  DOMController.renderGameBoard(currentPlayer.getBoard());
  DOMController.addListenerGrid("mouseover", (e) =>
    DOMController.showValidPlacement(
      currentPlayer,
      shipArray,
      [+e.target.dataset.row, +e.target.dataset.column],
      rotation
    )
  );
  DOMController.addListenerGrid("click", (e) => {
    const size = shipArray
    currentPlayer.placeShip(
      size,
      shipArray,
      [+e.target.dataset.row, +e.target.dataset.column],
      rotation
    );
    console.log(currentPlayer.getBoard());
    placeShipHandler();
  });
}

startButton.addEventListener("click", () => {
  ai = document.querySelector("input").checked;
  placeShipHandler();
});
