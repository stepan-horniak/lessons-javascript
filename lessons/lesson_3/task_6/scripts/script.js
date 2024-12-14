const showAnswer = document.querySelector(".answer")
let resolve
const userNumberMonth = parseInt(prompt("введіть номер місяця", "4"))
switch (userNumberMonth) {
  case 12:
  case 1:
  case 2:
    resolve = `зима`
    break

  case 3:
  case 4:
  case 5:
    resolve = `весна`
    break
  case 6:
  case 7:
  case 8:
    resolve = `літо`
    break
  case 9:
  case 10:
  case 11:
    resolve = `осінь`
    break
}
showAnswer.innerHTML = resolve
