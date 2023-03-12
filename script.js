//document.querySelectorAll(".reset").innerText = 0;

//***Variable definition***/
let totalScore, roundScore, activePlayer, dice, playGame;

//***Begining***/
newStart();

//***Fucnctions definition***/

//Function new start
function newStart() {
  totalScore = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  playGame = true;

  document.getElementById("totalScorePlayer-0").innerText = 0;
  document.getElementById("totalScorePlayer-1").innerText = 0;
  document.getElementById("currentScore-0").innerText = 0;
  document.getElementById("currentScore-1").innerText = 0;
  document.querySelector(".diceImage").style.display = "none";
  document.getElementById("name-0").innerText = "Score player one";
  document.getElementById("name-1").innerText = "Score player two";
  document.querySelector(".totalScore0").classList.add("active");
  document.querySelector(".totalScore1").classList.remove("active");
}

//Function next player
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.querySelector(".totalScore0").classList.toggle("active");
  document.querySelector(".totalScore1").classList.toggle("active");
  document.getElementById("currentScore-0").innerText = 0;
  document.getElementById("currentScore-1").innerText = 0;
}

//***Buttons setings***/

//Btn. Roll dice
document.querySelector(".rollDice").addEventListener("click", function () {
  if (playGame) {
    //Dice random number generator
    let dice = Math.ceil(Math.random() * 6);

    //Dice pictures
    let diceElement = document.querySelector(".diceImage");
    diceElement.style.display = "block";
    diceElement.src = "images/" + dice + ".jpg";

    //Score counting
    if (dice !== 1) {
      roundScore += dice;
      document.getElementById("currentScore-" + activePlayer).innerText =
        roundScore;
    } else {
      nextPlayer();
    }
  }
});

//Btn. Save score
document.querySelector(".saveScore").addEventListener("click", function () {
  if (playGame) {
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

    document.querySelector("#totalScorePlayer-" + activePlayer).innerText =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 30) {
      document.querySelector("#name-" + activePlayer).innerText =
        "Congrats, you are winner!";
      playGame = false;
    } else {
      nextPlayer();
    }
  }
});

//Btn. New Game
document.querySelector(".newGame").addEventListener("click", newStart);
