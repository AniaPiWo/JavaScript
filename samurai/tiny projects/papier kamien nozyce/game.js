const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
  playerHandHTML: "",
};

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  this.style.boxShadow = "0 0 0 4px hotpink";
}

/* const handSelection = (e) => {
  console.log(e.target);
}; */

hands.forEach((hand) => {
  hand.addEventListener("click", handSelection);
});

const aiChoice = () => {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
};

function startGame() {
  if (!game.playerHand) {
    alert("wybierz dłoń");
    return;
  }
  game.aiHand = aiChoice();
  console.log("PLAYER HAND =>", game.playerHand);
  console.log("AI HAND =>", game.aiHand);
}

document.querySelector(".start").addEventListener("click", startGame);
