// 1. Prompt the user for the password criteria
// Password lenth 8 < 128
// lowercase, uppercase, special characters
// 2.Validate the input
// 3. Generate password based on criteria
// 4. Display password on the page

//Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays for letters, numbers, and special characters
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharacter = [":", ";", "@", "!", "%", "&", ",", "*", "$", "<", "/", ">", "+", "-"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables to confirm for password
var confirmLowerCase;
var passwordLength = 0;
var confirmSpecialCharacter;
var confirmNumber;
var confirmUpperCase;

//function to generate the password button
function generatePassword() {
var confirmLength = prompt("How many characters would you like your password to have?");

  // Loop if answer is outside the parameters 
  if(confirmLength < 8 || confirmLength > 128) {
      alert("Password length is incorrect Please try again!");
      return null
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Select OK to confirm if you would like to include special characters");
    var confirmNumber = confirm("Select OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Select OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Select OK to confirm if you would like to include uppercase characters");
      // Loop incase user statement is not within parameters
      if(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
      }

      // Assign an action to the password
      var passwordCharacters = []
      
    if (confirmSpecialCharacter && confirmLowerCase && confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(specialCharacter, confirmUpperCase, confirmLowerCase)
      
    }

    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }
    
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(uppercase)
      console.log(passwordCharacters)
    }

      //Loop selecting random characters from the array
      var random = "";
      
      for (let p = 0; p < confirmLength; p++) {
        random = random + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return random;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
