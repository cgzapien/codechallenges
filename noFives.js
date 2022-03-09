//still working on solution

function noFives(num1, num2) {
  const newArr = []
  for(let i = num1; i <= num2; i++){
    newArr.push(i)
  }
  return console.log(newArr.filter((num, indx) => {
    if(newArr[indx] !== 5) {
      return true
    }
  }))
}

noFives(1,60)
