let showAnswer = document.querySelector(".answer")
let firstQuantity = parseInt(prompt("введіть кількість першого товару", "5"))
let firstPrice = parseFloat(prompt("введіть ціну першого товару", "10.5"))
let secondQuantity = parseInt(prompt("введіть кількість другого товару", "5"))
let secondPrice = parseFloat(prompt("введіть ціну другого товару", "10.5"))
let thirdQuantity = parseInt(prompt("введіть кількість третього товару", "5"))
let thirdPrice = parseFloat(prompt("введіть ціну третього товару", "10.5"))

let firstCostProduct = firstQuantity * firstPrice
let secondCostProduct = secondQuantity * secondPrice
let thirdCostProduct = thirdQuantity * thirdPrice
let totalPrice = firstCostProduct + secondCostProduct + thirdCostProduct
let resolve = `
    <h6>ЧЕК</h6>
    <ol>
        <li>ціна товару № 1 :${firstPrice} К-сть : ${firstQuantity} загалом :${firstCostProduct}</li>
        <li>ціна товару № 2 :${secondPrice} К-сть : ${secondQuantity} загалом :${secondCostProduct}</li>
        <li>ціна товару № 3 :${thirdPrice} К-сть : ${thirdQuantity} загалом :${thirdCostProduct}</li>
    </ol>
    <div>Загалом : ${totalPrice}</div>
`
showAnswer.innerHTML = resolve
