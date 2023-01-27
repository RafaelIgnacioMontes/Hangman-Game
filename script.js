let buttonInput = document.getElementById('submitbutton')

let textType = document.querySelector('input')

let boxElements = []

let playAgainButton = document.getElementById('playagain')

for (let i = 1; i < 6; i++) {
  let id = 'box' + i
  boxElements.push(document.getElementById(id))
}
let secretDisplay = document.getElementById('board')

let revealArray = []

let incorrectGuess = 0

let updateCount = 0

let restartGame = () => {
  document.location = 'index.html'
}

const setRevealArray = () => {
  if (revealArray.length === 0) {
    for (let i = 0; i < window.keyWord.length; i++) {
      revealArray.push('_')
    }
  }
}

const revealBox = () => {
  if (boxElements[updateCount].style.visibility !== 'visible') {
    boxElements[updateCount].style.visibility = 'visible'
  }
  updateCount++
  document.getElementById('boxcount').innerText = updateCount
}

const revealDisplay = () => {
  secretDisplay.innerText = ''
  for (let i = 0; i < revealArray.length; i++) {
    secretDisplay.innerText = secretDisplay.innerText + ' ' + revealArray[i]
  }
}

const letterFunction = () => {
  setRevealArray()
  let guessCorrectLetter = false
  for (let i = 0; i < keyWord.length; i++) {
    if (
      textType.value.toUpperCase() === window.keyWord[i] &&
      revealArray[i] === '_'
    ) {
      revealArray[i] = window.keyWord[i]
      guessCorrectLetter = true
    }
  }
  if (guessCorrectLetter === false) {
    incorrectGuess++
    revealBox()
  }
  if (revealArray.toString() == window.keyWord.split('')) {
    buttonInput.removeEventListener('click', letterFunction)
    playAgainButton.style.visibility = 'visible'
  } else {
    if (updateCount >= 5) {
      document.getElementById('youlose').innerText = `OBLITERATE`
      playAgainButton.style.visibility = 'visible'
      gameState === true
      return
    }
  }
  revealDisplay()
}

buttonInput.addEventListener('click', letterFunction)
playAgainButton.addEventListener('click', restartGame)
