let buttonInput = document.querySelector('button')

let textType = document.querySelector('input')

window.keyWord = 0

let secretDisplay = document.getElementById('board')

let revealArray = []

let revealDisplay = () => {
  secretDisplay.innerText = revealArray
}

let letterFunction = () => {
  for (i = 0; i < keyWord.length; i++) {
    if (textType.value.toUpperCase() === window.keyWord[i]) {
      revealArray[i] = window.keyWord[i]
    } else if (revealArray[i] != '_') {
    } else {
      revealArray[i] = '_'
    }
  }
  revealDisplay()
}

buttonInput.addEventListener('click', letterFunction)
