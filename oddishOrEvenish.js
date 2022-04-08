// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish 
// if the sum of all of its digits is even. If a number is Oddish, return "Oddish". 
// Otherwise, return "Evenish". You can assume that all input values will be 
// positive whole numbers.

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. 
//oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5

const oddishOrEvenish = (num) => {
let newNum = [...num.toString()].map(Number).reduce((a,b) => a + b)
return newNum % 2 === 0 ? "Evenish" : "Oddish"
}


// Sample data for testing: 
console.log(oddishOrEvenish(43)) 
// 4 + 3 = 7
// "Oddish"

console.log(oddishOrEvenish(373)) 
// 3 + 7 + 3 = 13
// "Oddish"

console.log(oddishOrEvenish(4433)) 
// 4 + 4 + 3 + 3 = 14
// "Evenish"

console.log(oddishOrEvenish(1020403)) 
// 1 + 0 + 2 + 0 + 4 + 0 + 3 = 10
// "Evenish"
