const showAnswer = document.querySelector(".answer")
let resolve
const userAge = parseInt(prompt("введіть вік людини.", "10"))

if (userAge >= 0 && userAge <= 6) resolve = `дитина в садочку`
else if (userAge >= 7 && userAge <= 17) resolve = `школяр`
else if (userAge >= 18 && userAge <= 22) resolve = `студент`
else if (userAge >= 23 && userAge <= 60) resolve = `працівник`
else if (userAge >= 60) resolve = `пенсіонер`

showAnswer.innerHTML = resolve
