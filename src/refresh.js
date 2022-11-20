import "./style.css";

button.addEventListener("click", refreshCard);

function refreshCard() {
    let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let suitInCard = document.createElement("p");
  suitInCard.innerText = suits[randomSuit];
  if (randomSuit == 0 || randomSuit == 1) {
    document.querySelector(".suitAppeared").style.color = "red";
  } else {
    document.querySelector(".suitAppeared").style.color = "black";
  }
  document.querySelector(".suitAppeared").appendChild(suitInCard);
  let suitInCard2 = document.createElement("p");
  suitInCard2.innerText = suits[randomSuit];
  if (randomSuit == 0 || randomSuit == 1) {
    document.querySelector(".suitAppeared2").style.color = "red";
  } else {
    document.querySelector(".suitAppeared2").style.color = "black";
  }
  document.querySelector(".suitAppeared2").appendChild(suitInCard2);
  let numberInCard = document.createElement("p");
  numberInCard.innerText = numbers[randomNumber];
  document.querySelector(".numberAppeared").appendChild(numberInCard);
}