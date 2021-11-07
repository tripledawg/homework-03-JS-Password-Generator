//Leslie says:  I have to write a generatePassword function which is called in the writePassword function

// Assignment Code
var generatePasswordBtn = document.querySelector("#generate");//selects the button with this ID//I renamed the variable whcih was initially generateBtn to generatePasswordBtn

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var textArea = document.querySelector("#password"); //document is a reserved word that has something to do with the DOM and and querySelector returns the first element in a doc that matches the specified selector which in this case is #password
  //like getElementByID//renamed passwordText textArea
  textArea.value = password;

}

// Add event listener to generate button Button is controlled by this listenerListeners go at the ned because lol
generatePasswordBtn.addEventListener("click", writePassword);

//use pormpt, alert and confirm methods
//.addEventListener is a method that makes the 'generate password button' respond to a click and then execute the function writePassword
//I have to create generatePassword function
//My code is below: //confirm if you need user's input to proceed

function generatePassword() {
  var ansToPwdLength = prompt("How long would you like your password to be? It must have at least 8 characters and no more than 128 characters. ");
  if (ansToPwdLength >= 8 && ansToPwdLength <= 128) {
    alert("Thank you.");
  } else {
    alert("Try again. Your password must have at least 8 characters and no more than 128.");
    return "No input received.  Please click the red generate button to try again. ";
  }

  var ansToIncludeCapOrNot = confirm("Would you like your password to include capital letters? Click 'ok' if yes.  Otherwise, click 'cancel'"); //confirm is for asking boolean questions???

  if (ansToIncludeCapOrNot) {
    alert("What a capital idea!");
  } else {
    alert("No capital letters will be included.")
  }

  var ansToIncludeSpecChar = confirm("Would you like your password to include special characteres? Click 'ok' for yes and 'cancel for no.");

  if (ansToIncludeSpecChar) {
    alert("Your password will have special characters.");
  } else {
    alert("No special characters will be included.");
  }

  var generatedPassword = "";
  return generatedPassword;

}