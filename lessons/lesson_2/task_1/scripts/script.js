let showAnswer = document.querySelector(".answer")
let numOne = parseFloat(prompt("Введіть число a", "5"))
let numTwo = parseFloat(prompt("Введіть число b", "5"))

let sum = numOne + numTwo
let multiply = numOne * numTwo
let division = numOne / numTwo

let resolve = `
   <table border="1">
       <thead>
           <tr>
               <th>Операція</th>
               <th>Результат</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Перше число</td>
               <td>${numOne}</td>
           </tr>
           <tr>
               <td>Друге число</td>
               <td>${numTwo}</td>
           </tr>
           <tr>
               <td>Сума</td>
               <td>${sum}</td>
           </tr>
           <tr>
               <td>Добуток</td>
               <td>${multiply}</td>
           </tr>
           <tr>
               <td>Частка</td>
               <td>${division}</td>
           </tr>
       </tbody>
   </table>
`

showAnswer.innerHTML = resolve
