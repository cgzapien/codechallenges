function antiCaps(string){
  // const char = string.split("").map(letter =>{
  //   console.log(letter === letter.toUpperCase() ?
  //   letter.toLowerCase() : letter.toUpperCase())
  // }).join("")
  //return console.log(char.join(" "))
  const emptyArr = []
  for(let i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      emptyArr.push(string[i].toLowerCase())
    } else {
      emptyArr.push(string[i].toUpperCase())
    }
  }
  console.log(emptyArr.join("")) 
}

antiCaps('Hello')  // hELLO
antiCaps('racEcar')  // RACeCAR
antiCaps('bAnAnA')  // BaNaNa