let buttonInput = document.querySelector('button')

let textType = document.querySelector('input')

let keyWord = document.getElementById('board').innerText.toUpperCase()

let revealArray = []

let letterFunction = () => {
  for (i = 0; i < keyWord.length; i++) {
    if (textType.value.toUpperCase() === keyWord[i]) {
      revealArray[i] = keyWord[i]
    } else if (revealArray[i] != '_') {
    }
  }
  console.log(revealArray)
}

buttonInput.addEventListener('click', letterFunction)
