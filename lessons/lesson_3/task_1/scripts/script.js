let showAnswer = document.querySelector(".answer")
let priceProduct = parseFloat(prompt("введіть ціну товару", "15"))
let moneyNumber = parseFloat(prompt("введіть кількість грошей", "40"))
let resolve
if (moneyNumber >= priceProduct) {
  let count = moneyNumber - priceProduct
  resolve = `дякуємо за покупку`
  if (count >= 4) {
    resolve += `, купіть лотерею за 4 грн`
  }
} else {
  resolve = `нема грошей`
}

showAnswer.innerHTML = resolve
