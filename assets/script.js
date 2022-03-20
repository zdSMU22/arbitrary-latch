// Assignment code here

//Strings of characters 
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let special = "!@#$%^&*()_-+=~<>?/|";

//empty arrays to write the random concatentations
let userPass=[];
let userSetChar=[];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  //will clear the old password, if one is generated, and allow the new password to be written to the screen
  if(userPass.length > 0){
    userPass = []
  }

  //Each of these will prompt the user to "OK" or "Cancel" the use of Upper, lower, numbers, and or special characters.
  // If the user selects "OK", then the strings for each will be push to the end of the userSetChar array
  console.log("Hey you clicked the button!")
  //Prompt user for password critria
  let promptUpper = confirm("Should your password include uppercase?");
  if(promptUpper){
    userSetChar.push(...upper)
  }
  console.log('capit',userSetChar)

  let promptLower = confirm("Should your password include lowercase?");
  if(promptLower){
    userSetChar.push(...lower)
    console.log('low',userSetChar)
  }

  let promptNumber = confirm("Should your password include numbers?");
  if(promptNumber){
    userSetChar.push(...num)
    console.log('num',userSetChar)
  }

  let promptSpecial = confirm("Should your new password include special characters?");
  if(promptSpecial){
    userSetChar.push(...special)
    console.log('special',userSetChar)
  }
  
  //Prompt user for password character length
  let characterNumber = prompt("How many characters should be in your new password?");

  //If the user picks a character length less than 8 and more than 128 the loop will not continue
  if(characterNumber < 8  ){
    alert("Password must be atleast 8 characters")

  } else if (characterNumber > 128){
    alert("Password can not excede 128 characters")
  
  } else {
  // Loop to randomly assemble the characters selected by user to the number as long as the number is between 8 and 128
  for (let i = 0; i < characterNumber; i++) {
    userPass.push(userSetChar[Math.floor(Math.random() * userSetChar.length)])
    //console.log('user passw', userPass.join('+'))
    }
  }
  
  // Places the random generated password in the test area
  let passwordText = document.querySelector("#password");

  passwordText.value = userPass.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
