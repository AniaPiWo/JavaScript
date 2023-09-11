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

function checkResult(player, ai) {
  if (player === ai) {
    return "draw";
  } else if (
    (player === "papier" && ai === "kamień") ||
    (player === "kamień" && ai === "nożyczki") ||
    (player === "nożyczki" && ai === "papier")
  ) {
    return "win";
  } else {
    return "loss";
  }
}

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  if (result === "win") {
    document.querySelector('[data-summary="who-win"]').style.color = "green";
    document.querySelector(".wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Wygrałeś! 🥳";
  } else if (result === "loss") {
    document.querySelector('[data-summary="who-win"]').style.color = "red";
    document.querySelector(".losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Przegrałeś 😢";
  } else {
    document.querySelector(".draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').style.color = "gray";
    document.querySelector('[data-summary="who-win"]').textContent = "Remis 😐";
  }
  document.querySelector(".numbers span").textContent = ++gameSummary.numbers;
}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
  game.playerHand = "";
  game.aiHand = "";
}

function startGame() {
  if (!game.playerHand) {
    alert("wybierz dłoń");
    return;
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

document.querySelector(".start").addEventListener("click", startGame);
