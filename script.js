let buttonInput = document.querySelector('button')

let textType = document.querySelector('input')

window.keyWord = 0

let boxElements = []

for (let i = 1; i < 7; i++) {
  let id = 'box' + i
  boxElements.push(document.getElementById(id))
}
let secretDisplay = document.getElementById('board')

let revealArray = []

const setRevealArray = () => {
  if (revealArray.length === 0) {
    for (let i = 0; i < window.keyWord.length; i++) {
      revealArray.push('_')
    }
  }
  console.log(revealArray)
}

let incorrectGuess = 0

let revealBox = () => {
  let updateCount = 0
  boxElements.forEach((box) => {
    console.log(updateCount)
    if (box.style.visibility !== 'visible' && updateCount === 0) {
      box.style.visibility = 'visible'
      updateCount++
    }
  })
}

let revealDisplay = () => {
  secretDisplay.innerText = ''
  for (let i = 0; i < revealArray.length; i++) {
    secretDisplay.innerText = secretDisplay.innerText + ' ' + revealArray[i]
  }
}

let letterFunction = () => {
  setRevealArray()
  console.log(window.keyWord)
  let guessCorrectLetter = false
  for (let i = 0; i < keyWord.length; i++) {
    if (
      textType.value.toUpperCase() === window.keyWord[i] &&
      revealArray[i] === '_'
    ) {
      revealArray[i] = window.keyWord[i]
      guessCorrectLetter = true
    } else {
      console.log(revealArray)
    }
  }
  if (guessCorrectLetter === false) {
    incorrectGuess++
    revealBox()
  }
  revealDisplay()
}

buttonInput.addEventListener('click', letterFunction)
