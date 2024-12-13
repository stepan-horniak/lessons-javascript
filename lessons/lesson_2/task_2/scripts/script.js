let showAnswer = document.querySelector(".answer")
let yearOfBirth = parseInt(prompt("введіть рік народження", "1995"))

const currentYear = new Date().getFullYear()
let resolve = `
<div>рік який ви ввели ${yearOfBirth}</div>
<div> 
вам :
${currentYear - yearOfBirth}
років
</div>
`
showAnswer.innerHTML = resolve
