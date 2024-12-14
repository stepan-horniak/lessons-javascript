const showAnswer = document.querySelector(".answer")
let resolve

const randomNum = 1 + Math.floor(Math.random() * (5 - 1 + 1))
confirm(
  "Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.."
)
console.log(randomNum)

const firstUserNum = parseInt(prompt("введіть число від 1 до 5", ""))
if (firstUserNum === randomNum) resolve = `вгадав з перщою спробою`
else {
  const secondUserNum = parseInt(
    prompt("спроба 2 введіть число від 1 до 5", "")
  )
  if (secondUserNum === randomNum) resolve = `угадав з другою спробою`
  else resolve = `наступного разу пощастить`
}
showAnswer.innerHTML = resolve
