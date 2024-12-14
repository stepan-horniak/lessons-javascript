const showAnswer = document.querySelector(".answer")
let resolve

let userDriverCategory = prompt("введіть кітегорію водія", "a").toLowerCase()
if (userDriverCategory === "a") resolve = `можете їздити на мотоциклі`
else if (userDriverCategory === "b")
  resolve = `можете їздити на легковому автомобілі`
else if (userDriverCategory === "c")
  resolve = `можете їздити на вантажному автомобілі`
showAnswer.innerHTML = resolve
