const machineInput = document.querySelector("#machineNumber input");
const guessInput = document.querySelector("#guessNumber input");
const playButton = document.querySelector("#guessNumber button");
const resultScript = document.querySelector("#result");
const resultScript2 = document.querySelector("#result2");

function onPlayBtnClick(event) {
  event.preventDefault();
  const HIDDEN_CLASSNAME = "hidden";
  const machineIn = machineInput.value;
  const machineNum = Math.round(Math.random() * machineIn);
  const guessNum = guessInput.value;

  resultScript.classList.add(HIDDEN_CLASSNAME);
  resultScript2.classList.add(HIDDEN_CLASSNAME);

  if (machineIn !== "" && guessNum !== "") {
    resultScript.innerText = `You chose: ${guessNum}, the machine chose: ${machineNum}.`;
    if (guessNum == machineNum) {
      resultScript2.innerText = "You won!";
    } else {
      resultScript2.innerText = `You lost!`;
    }
    resultScript.classList.remove(HIDDEN_CLASSNAME);
    resultScript2.classList.remove(HIDDEN_CLASSNAME);
  }
}

playButton.addEventListener("click", onPlayBtnClick);
