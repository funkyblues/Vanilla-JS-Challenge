const inputNumber = document.querySelector(".inputNumber--get");
let userNumberGet = document.querySelector(".userNumber--get");
let userNumberPost = document.querySelector(".userNumber--post");
let guessTheNumber = document.querySelector(".inputNumber--post");
const playGame = document.querySelector(".play__game");
const hidden = document.querySelector(".hidden");
const gameResult = document.querySelector(".gameResult");

function letsPlayGame() {
  hidden.classList.remove("hidden");
  guessTheNumber.innerText = Math.ceil(inputNumber.value * Math.random()); 
  userNumberPost.innerText = userNumberGet.value;
  if (guessTheNumber.innerText === userNumberPost.innerText) {
    gameResult.innerText = "You won!";
  }
  else {
    gameResult.innerText = "You lost!";
  }
}


playGame.addEventListener("click", letsPlayGame);