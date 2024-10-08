function handleKeyboardKeyUpEvent(event) {
  //  player pressed key
  const playerPressed = event.key;

  // expected pressed key
  const currentAlphabetElement = document.getElementById("current_alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  if (playerPressed === expectedAlphabet) {
    continueGame();
    removeBackgroundColor(expectedAlphabet);
    console.log("you got the point");
  } else {
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
