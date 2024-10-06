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
