function handleKeyboardKeyUpEvent(event) {
  //  player pressed key
  const playerPressed = event.key;

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
    console.log("you got the point");
  } else {
    const currentLife = getTextElementValueById("current_life");
    const newLife = currentLife - 1;
    setTextElementValueById("current_life", newLife);

    // =========================================================================
    // const currentLifeElement = document.getElementById("current_life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // const newLife = currentLife - 1;
    // //  show life
    // currentLifeElement.innerText = newLife;

    // =========================================================================

    console.log("XXXXXXXXXXXXXXX");
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
  //   console.log(alphabet);
  const currentAlphabet = document.getElementById("current_alphabet");
  currentAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);
}

function play() {
  hideElementById("home_screen");
  showElementById("play_ground");
  continueGame();
}
