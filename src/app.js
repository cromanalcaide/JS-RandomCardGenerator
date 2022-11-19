/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  //let suits = [1, 2, 3, 4];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "J", "Q", "K"];
  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);

  // let suitInCard = document
  //   .querySelector("suitAppeared")
  //   .appendChild(suits[randomSuit]);
  // let numberInCard = document
  //   .querySelector("numberAppeared")
  //   .appendChild(numbers[randomNumber]);

  let suitInCard = document.createElement("p");
  suitInCard.innerText = suits[randomSuit];
  document.querySelector(".suitAppeared").appendChild(suitInCard);
  // let suitInCard2 = document.createElement("p");
  // suitInCard2.innerText = suits[randomSuit];
  // document.querySelector(".suitAppeared2").appendChild(suitInCard);
  let numberInCard = document.createElement("p");
  numberInCard.innerText = numbers[randomNumber];
  document.querySelector(".numberAppeared").appendChild(numberInCard);

  if (suitInCard === "♠" && "♣") {
    document.querySelector(".suitAppeared").style.color = "black";
  } else {
    document.querySelector(".suitAppeared").style.color = "red";
  }

  // console.log(suits[randomSuit]);
  // console.log(numbers[randomNumber]);
};
