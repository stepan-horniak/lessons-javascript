const showAnswer = document.querySelector(".answer")
let resolve
const userNumber = parseInt(
  prompt(
    `введіть номер пункту 
1. Веселий
2. Сумний
3. Обурений
`,
    "2"
  )
)
switch (userNumber) {
  case 1:
    resolve = `<img src="./smile.jpg" alt="">`
    break
  case 2:
    resolve = `<img src="./sad.jpg" alt="">`
    break

  case 3:
    resolve = `<img src="./resentful.jpg" alt="">`
    break
}
showAnswer.innerHTML = resolve
