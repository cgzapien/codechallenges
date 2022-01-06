/**
understand the problem - mimic the map method
make a plan - create [] iterate return []
code it
look back
 */

Array.prototype.myMap = function(userfunction){
  let arr = []
    for(let i = 0; i < this.length; i++) {
      arr.push(userfunction(this[i]))
    }
  return arr 
}

const times2 = [1, 2, 3].myMap(num => num * 3) 
console.log(times2) // => [2, 4, 6]

Array.prototype.myFindIndex = function(callBack) {
  for(let i = 0; i < this.length; i++) {
    if(callBack(this[i])) return i
  }
  return -1
}
const nums = [1,2,3,4]
console.log(nums.myFindIndex(x => {
  return x === 2
}))