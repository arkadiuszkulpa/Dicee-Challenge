

function throwDice() {

  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var dice1string = "images/dice" + randomNumber + ".png";
  document.getElementById('img1').setAttribute("src", dice1string);

  var dice2string = "images/dice" + randomNumber2 + ".png";
  document.getElementById("img2").setAttribute("src", dice2string);

  if (randomNumber > randomNumber2) {
    document.getElementById("Title").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber < randomNumber2) {
    document.getElementById("Title").innerHTML = "Player 2 Wins! 🚩";
  } else if (randomNumber == randomNumber2) {
    document.getElementById("Title").innerHTML = "Draw!";
  }
}

const button = document.querySelector('button');

// button.addEventListener('click', event => {
//   button.textContent = `Click count: ${event.detail}`;
// });

button.addEventListener('click', event => {
  throwDice();
})
