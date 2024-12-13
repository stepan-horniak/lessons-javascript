let showAnswer = document.querySelector(".answer")
let quantityGoods = parseInt(prompt("введіть кількість товару", "5"))
let priceGoods = parseFloat(prompt("введіть вартість товару", "10"))

let totalPrice = quantityGoods * priceGoods
let vat = (totalPrice * 5) / 100
let resolve = `
    <ul>
            <li>введена кількість товару = ${quantityGoods}</li>
        <li>введена вартість товару = ${priceGoods}</li>

        <li>загальна вартість товару = ${totalPrice}</li>
        <li> ПДВ (5% від загальної вартості) = ${vat}</li>
    </ul>
`
showAnswer.innerHTML = resolve
