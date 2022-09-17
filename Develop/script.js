// String //

const upperCase= "ABCDEFGHIKJLMNOPQRSTUVWXYZ"
const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const sym= "\!\#\$\%\&\'\(\'\,\*\+\-\:\;\<\=\>\?\@\^\_\`\{\|\}\~"
const numbers="1234567890"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  while (password == ""){
    alert("Nothing was chosen, Please try again!")
    password = generatePassword() 
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
let pwd = Number(prompt("How long do you want your password?(8-128)"))

while(pwd < 8 || pwd > 128 ){
  alert("Please choose a range between 8 to 128 characters")
  pwd = Number(prompt("How long do you want your password?(8-128)"))
}

//PROMPTS to know what arrays to add to charPool Array // 

let upr = confirm("Would you like uppercase letters?")
let lwr = confirm("Would you like lowercase letters?")
let spc = confirm("Would you like symbols?")
let num = confirm("Would you like numbers?")
let charPool = ""
let password = ""

// The adding of the chosen array to charPool string //

if  (upr) {
  charPool += upperCase
}
if  (lwr) {
  charPool += lowerCase
}
if  (spc) {
  charPool += sym
}
if  (num) {
  charPool += numbers
}

// randomizing the finished charPool string //

for (let i = 0; i < pwd; i++) {
 
  let y = Math.floor(Math.random() * charPool.length)
  password += charPool.charAt(y)
}

return password



}





