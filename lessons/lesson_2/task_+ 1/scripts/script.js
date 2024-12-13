let showAnswer = document.querySelector(".answer")

const screenWidth = parseFloat(prompt("введіть ширину екрана", "1200"))
const quantityElements = parseFloat(prompt("введіть кількість елементів,", "4"))
let widthElement = screenWidth / quantityElements
let resolve = `
    <ol>
        <li> ширинa екранy : ${screenWidth}</li>
        <li> кількість елементів : ${quantityElements}</li>
        <li> ширина кожного елемента : ${widthElement}</li>
    </ol>
`
showAnswer.innerHTML = resolve
