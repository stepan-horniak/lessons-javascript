const showAnswer = document.querySelector(".answer")
let firstChildName = prompt("введіть імя першої дівчинки", "Ірина")
let firstChildCandyNumber = parseInt(
  prompt("введіть кількість цукерок в першої дівчинки", "5")
)
let secondChildName = prompt("введіть імя другої дівчинки", "Яна")
let secondChildCandyNumber = parseInt(
  prompt("введіть кількість цукерок в другої дівчинки", "5")
)

let resolve
if (firstChildCandyNumber === secondChildCandyNumber) {
  resolve = `<div>кількість цукерок одинакова </div>`
} else {
  if (firstChildCandyNumber > secondChildCandyNumber) {
    resolve = `в ${firstChildName} цукерок більше : ${firstChildCandyNumber}`
  } else {
    resolve = `в ${secondChildName} цукерок більше : ${secondChildCandyNumber}`
  }
}

showAnswer.innerHTML = resolve
