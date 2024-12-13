let showAnswer = document.querySelector(".answer")
let a = parseInt(prompt("введіть число а", "5"))
let b = parseInt(prompt("введіть число b", "5"))
let c = parseInt(prompt("введіть число c", "5"))

let taskOne = a + 12 + b
let taskTwo = Math.sqrt((a + b) / (2 * a))
let taskThree = Math.cbrt((a + b) * c)
let taskFour = Math.sin(a / -b)

let resolve = `
    <ol>
        <li>S1 = ${taskOne}</li>
        <li>S2 = ${taskTwo}</li>
        <li>S4 = ${taskThree}</li>
        <li>S4 = ${taskFour}</li>
    </ol>
`
showAnswer.innerHTML = resolve
