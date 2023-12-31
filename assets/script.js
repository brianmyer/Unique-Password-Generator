// Assignment code here
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '<', '>', '?', "'", '"'];
let builtArray = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){
builtArray = [];
if (confirm('Do you want your password to contain lowercase letters?')) {
  builtArray = [...builtArray, ...lowerAlphabet];
};
console.log(builtArray)
if (confirm('Do you want your password to contain uppercase letters?')) {
  builtArray = [...builtArray, ...upperAlphabet];
 
};
console.log(builtArray)

if (confirm('Do you want your password to contain numbers?')) {
  builtArray = [...builtArray, ...numbers];

};
console.log(builtArray)

if (confirm('Do you want your password to contain special characters?')) {
  builtArray = [...builtArray, ...specialCharacters];

};
console.log(builtArray);

let password = "";

let passwordLength = prompt('How many characters (8min-128max) would you like your password to be?')
console.log(passwordLength)
if (passwordLength < 8 || passwordLength > 128){
  alert('Please enter a number between 8-128')
  passwordLength = prompt('How many characters (8min-128max) would you like your password to be?')
}

if (passwordLength >= 8 && passwordLength <= 128) {

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random(builtArray)*builtArray.length)
    password += builtArray[randomIndex];
  };
} 

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
