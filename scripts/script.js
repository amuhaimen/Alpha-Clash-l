function handleKeyboardKeyUpEvent(event) {
  //  player pressed key
  const playerPressed = event.key;

  // stop the game
  if (playerPressed === "Escape") {
    gameOver();
  }

  // expected pressed key
  const currentAlphabetElement = document.getElementById("current_alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current_score");
    const newScore = currentScore + 1;
    setTextElementValueById("current_score", newScore);

    // =========================================================================

    // // get the current element value
    // const currentScoreElement = document.getElementById("current_score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // // increase the value by 1
    // const newScore = currentScore + 1;
    // // show the updated score
    // currentScoreElement.innerText = newScore;

    // =========================================================================

    // start a new round
    removeBackgroundColor(expectedAlphabet);
    continueGame();
    // console.log("you got the point");
  } else {
    const currentLife = getTextElementValueById("current_life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current_life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }

    // =========================================================================
    // const currentLifeElement = document.getElementById("current_life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // //  show life
    // currentLifeElement.innerText = newLife;

    // =========================================================================

    // console.log("XXXXXXXXXXXXXXX");
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  // step 1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  //   console.log(alphabet);

  // step 2: set randomly generated alphabet to the screen (show it)
  const currentAlphabet = document.getElementById("current_alphabet");
  currentAlphabet.innerText = alphabet;

  // step 3: set background color
  setBackgroundColor(alphabet);
}

function play() {
  // hide everything
  hideElementById("home_screen");
  hideElementById("final_score");

  // show only play ground
  showElementById("play_ground");

  // reset score and life
  setTextElementValueById("current_life", 5);
  setTextElementValueById("current_score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play_ground");
  showElementById("final_score");

  // show the last score
  const lastScore = getTextElementValueById("current_score");
  setTextElementValueById("last_score", lastScore);

  // clear the last selected highlighted alphabet
  const currentAlphabet = getElementTextById("current_alphabet");
  removeBackgroundColor(currentAlphabet);
}
