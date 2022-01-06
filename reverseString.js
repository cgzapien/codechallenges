function reverseString(str){
//   const splitIt = str.split("")
//  const reverseArray = splitIt.reverse()
//  return reverseArray.join("")
 return str.split("").reverse().join("")
}

console.log(reverseString("Hello World")) // => "dlroW olleH"