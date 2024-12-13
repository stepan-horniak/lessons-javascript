let showAnswer = document.querySelector(".answer")

let randomNumMonth = Math.floor(Math.random() * 12) + 1
let randomNumDay = Math.floor(Math.random() * 7)
let resolve = `
    <ol>
        <li>випадковий номер місяця : ${randomNumMonth}</li>
        <li>випадковий номер дня : ${randomNumDay}</li>
        <li>сума  : ${randomNumDay + randomNumMonth}</li>

    </ol>
`
showAnswer.innerHTML = resolve
