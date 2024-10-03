const firstSonAge = Math.floor((Math.random()) * 20) + 1
const secondSonAge = Math.floor((Math.random()) * 30) + 1
const ageInputBox = document.getElementById("age-of-Man")
const bothSon = firstSonAge + secondSonAge

function sayHelloWorld () {
    const manActualAge = ageInputBox.value
    console.log({firstSonAge, secondSonAge, manActualAge})

   
    if (bothSon <= manActualAge ) {
        document.getElementById("message").textContent = "The man's age is greater than the sum of his two sons' ages."
      } else {
        document.getElementById("message").textContent = "The man's age is less than the sum of his two sons' ages."
      }
        
} 





