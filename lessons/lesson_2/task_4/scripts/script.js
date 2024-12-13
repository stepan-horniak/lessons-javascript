let showAnswer = document.querySelector(".answer")
let lenghtCentimeters = parseInt(prompt("введіть довжину в сантиметрах", "100"))

let lenghtMeters = lenghtCentimeters / 100
let lenghtKilometers = lenghtCentimeters / 100000

let resolve = `
    <ol>
        <li>ви ввели сантиметрів : ${lenghtCentimeters}</li>
        <li>довжина в метрах : ${lenghtMeters} </li>
        <li>довжина в кілометрах : ${lenghtKilometers}</li>
    </ol>
`
showAnswer.innerHTML = resolve
