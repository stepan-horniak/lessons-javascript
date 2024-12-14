const showAnswer = document.querySelector(".answer")
let resolve
const numberDay = parseInt(prompt("введіть номер дня тижня від 1 до 7", "6"))
switch (numberDay) {
  case 1:
    resolve = `понеділок`
    break
  case 2:
    resolve = `вівторок`
    break
  case 3:
    resolve = `середа`
    break
  case 4:
    resolve = `четверг`
    break
  case 5:
    resolve = `пятниця`
    break
  case 6:
    resolve = `субота`
    break
  case 7:
    resolve = `неділя`
    break
}

showAnswer.innerHTML = resolve
