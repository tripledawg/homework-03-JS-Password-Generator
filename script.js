

// Assignment Code
var generatePasswordBtn = document.querySelector("#generate");//renamed the variable whcih was initially generateBtn to generatePasswordBtn

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var textArea = document.querySelector("#password"); 
  //renamed "passwordText" to "textArea"
  textArea.value = password;

}

// Add event listener to generate button Button is controlled by this listenerListeners go at the ned because lol
generatePasswordBtn.addEventListener("click", writePassword);


function generatePassword() {
  //user input section:  used prompt method for open-ended questions to user and if/else conditions determined the alert or return message
  var ansToPwdLength = prompt("How long would you like your password to be? It must have at least 8 characters and no more than 128 characters. ");
  if (ansToPwdLength >= 8 && ansToPwdLength <= 128) {
    alert("Your password will include " + ansToPwdLength + " characters."); //concatenated variable storing user input inside an alert string
  } else {
    alert("Try again. Your password must have at least 8 characters and no more than 128.");
    return "No input received.  Please click the red generate button to try again. ";
  }
  //used confirm method for yes/no boolean type user questions
  var ansToIncludeCapOrNot = confirm("Would you like your password to include capital letters? Click 'ok' if yes.  Otherwise, click 'cancel'"); //confirm is for asking boolean questions???

  if (ansToIncludeCapOrNot) {
    alert("What a capital idea! Your password will include capital letters.");
  } else {
    alert("No capital letters will be included.")
  }

  var ansToIncludeSpecChar = confirm("Would you like your password to include special characteres? Click 'ok' for yes and 'cancel for no.");

  if (ansToIncludeSpecChar) {
    alert("Your password will have special characters.");
  } else {
    alert("No special characters will be included.");
  }
//password generating part of function
  var generatedPassword = "";

  var ballPitOfLetters = "abcdefghijklmnopqrstuvwxyz";//I liked the ball pit metaphor to help me think about the variables I needed to create
  var ballPitOfCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ballPitOfChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";  //escaped out the quote and the backslash

  if (ansToIncludeCapOrNot) {//if user says yes to caps it adds the caps adds to the 'ballpit" of lower case letters which are a default to 
    ballPitOfLetters += ballPitOfCaps;
  }

  if (ansToIncludeSpecChar) {
    ballPitOfLetters += ballPitOfChars;//if user says yes to special characters it adds characters to the newly defined (or not) ballPitOfLetters
  }

  for (let i = 0; i < ansToPwdLength; i++) { //this is where the length of the password is determined
    generatedPassword += ballPitOfLetters[Math.floor(Math.random() * ballPitOfLetters.length)];//.floor to round decimal created from math.random, in these you multiply by the max amount, which in this case is the length of the string of whaever the ballpit of opttions ends up being
  }

  return generatedPassword;
}



