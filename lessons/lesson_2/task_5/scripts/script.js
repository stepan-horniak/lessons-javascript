let showAnswer = document.querySelector(".answer")
let quantitySecond = parseInt(prompt("введіть кількість секунд", "60"))

let hours = quantitySecond / 3600
let minutes = quantitySecond / 60
let resolve = `
    <ol>
        <li>ви ввели секунд : ${quantitySecond}</li>
        <li>годин : ${hours}</li>
        <li>минут : ${minutes}</li>
    </ol>
`
showAnswer.innerHTML = resolve
