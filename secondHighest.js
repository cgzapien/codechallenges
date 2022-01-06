// Write a function that takes an array of numbers 
//and returns the second highest number. 

function getSecondHighest(numbers){
  for(let i = 0; i < numbers; i++) {
    return i
  }

}

console.log(getSecondHighest([4, 6, 2, 43, 3, 9])) // => 9
console.log(getSecondHighest([4, 100, 2, 43, 3, 9])) // => 43