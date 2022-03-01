function fizzbuzz(){
  const array = []
  for(let i = 1; i <= 100; i++){
    // if(i % 3 == 0 && i % 5 == 0){
    //   // console.log(i, "fizzbuzz")
    //   array.push("fizzbuzz")
    // } else if(i % 3 == 0){
    //   //console.log(i, "fizz")
    //   array.push("fizz")
    // } else if(i % 5 == 0){
    //   //console.log(i, "buzz")
    //   array.push("buzz")
    // } else {
    //   //console.log(i)
    //   array.push(i)
    // }
    i % 3 == 0 && i % 5 == 0 ? array.push('fizbuzz') : 
    i % 3 == 0 ? array.push("fizz") : 
    i % 5 == 0 ? array.push("buzz") : 
    array.push(i)
  }  
  return console.log(array)
}
function keepTalley(callback){
  console.log('callback: ', callback);
  const count = 0

  return count
}
/*
Optional:
Write a function that keeps a tally of how often the phrases 
"fizz","buzz", and "fizzbuzz" occur in the array returned from the previous function.
 */
fizzbuzz()
keepTalley(fizzbuzz)