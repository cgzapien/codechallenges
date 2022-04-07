//Repeating Letters
//Create a function that takes a string and returns a string in 
//which each character is repeated once.

const doubleChar = (string) => {
  let newString = "";
  for(let i = 0; i < string.length; i++) {
    newString += string[i] + string[i]
  }
  return console.log(newString);
}

doubleChar("String")  //"SSttrriinngg"

doubleChar("Hello World!")  //"HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") //"11223344!!__  "