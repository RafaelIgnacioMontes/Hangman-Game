let buttonInput = document.querySelector('button')

let textType = document.querySelector('input')

let boxElements = []

for (let i = 1; i < 6; i++) {
  let id = 'box' + i
  boxElements.push(document.getElementById(id))
}
let secretDisplay = document.getElementById('board')

let revealArray = []

let incorrectGuess = 0

let updateCount = 0

const setRevealArray = () => {
  if (revealArray.length === 0) {
    for (let i = 0; i < window.keyWord.length; i++) {
      revealArray.push('_')
    }
  }
  console.log(revealArray)
}

let revealBox = () => {
  console.log(updateCount)
  if (boxElements[updateCount].style.visibility !== 'visible') {
    boxElements[updateCount].style.visibility = 'visible'
  }
  updateCount++
  document.getElementById('boxcount').innerText = updateCount
}

let revealDisplay = () => {
  secretDisplay.innerText = ''
  for (let i = 0; i < revealArray.length; i++) {
    secretDisplay.innerText = secretDisplay.innerText + ' ' + revealArray[i]
  }
}

let letterFunction = () => {
  setRevealArray()
  console.warn(revealArray)
  console.warn(window.keyWord.split(''))
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
  console.log(revealArray, window.keyWord.split(''))
  if (revealArray.toString() == window.keyWord.split('')) {
    console.log(revealArray)
    console.log(window.keyWord.split(''))
    return
  }
  revealDisplay()
}

// let winCondition = () => {
//   console.log(letters)
//   if (revealArray === revealArray) {
//     alert('GAMEEND')
//     return
//   }
// }

buttonInput.addEventListener('click', letterFunction)
