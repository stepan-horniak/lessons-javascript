let showAnswer = document.querySelector(".answer")

const priceGoodsFirst = parseFloat(
  prompt("введіть вартість першого товару", "12")
)
const quantityGoodsFirst = parseInt(
  prompt("введіть кількість першого товару,", "4")
)
const priceGoodsSecond = parseFloat(
  prompt("введіть вартість другого товару", "12")
)
const quantityGoodsSecond = parseInt(
  prompt("введіть кількість другого товару,", "4")
)
let totalPriceFirst = quantityGoodsFirst * priceGoodsFirst
let totalPriceSecond = quantityGoodsSecond * priceGoodsSecond
let totalPrice = totalPriceFirst + totalPriceSecond

let resolve = `
    <ol>
        <li> вартість першого товару : ${priceGoodsFirst}</li>
        <li> кількість першого товару : ${quantityGoodsFirst}</li>
        <li> вартість другого товару : ${priceGoodsSecond}</li>
        <li> кількість другого товару : ${quantityGoodsSecond}</li>
        <li> загальна вартість першого товару : ${totalPriceFirst}</li>
        <li> загальна вартість другого товару : ${totalPriceSecond}</li>
        <li> загалом : ${totalPrice}</li>

    </ol>
`
showAnswer.innerHTML = resolve
