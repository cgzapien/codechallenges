/**
 * have not solved it yet!!!!
 * Challenge
 * Take an array of array of string numbers. Convert them to numbers
 * If there is numbers more than twice then add those numbers together
 */
function addMultiples(array){
  const convertArraysToNumbers = array.map(subarray => subarray.map(Number))
  let r = new Set(convertArraysToNumbers.map(subarray => subarray.filter((v,i,a) => a.indexOf(v) !== i)))

  console.log(Array.from(r));
  
}

let array = [["1","2","3"], ["2", "4", '5'], ["2", "5", '5']]
addMultiples(array)