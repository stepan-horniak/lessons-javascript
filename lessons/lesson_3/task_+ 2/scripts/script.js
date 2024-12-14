let showAnswer = document.querySelector(".answer")

const salary = parseFloat(prompt("введіть розмір заробітної плати", "1000"))
const livingMinimum = parseFloat(
  prompt("введіть розмір прожиткового мінімуму,", "1100")
)
let socialAssistance = livingMinimum - salary
resolve = `
    <ol>
        <li> розмір заробітної плати : ${salary}</li>
        <li> розмір прожиткового мінімуму : ${livingMinimum}</li>
        <li> розмір соціальної допомоги : ${socialAssistance}</li>
    </ol>
`
showAnswer.innerHTML = resolve
