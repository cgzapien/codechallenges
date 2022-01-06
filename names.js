function list(names){
  let str = ''
  const arrayOfNames = names.map(name => name.name)
  console.log(arrayOfNames);
  let lastName = arrayOfNames.pop()
  console.log(lastName);
  str += arrayOfNames
  return console.log(str)

  // let str = ''
  // for(let i = 0; i < names.length; i++){
  //   str += names[i].name
  //   //console.log(names[i].name )
  // } 
  // return console.log(str)
}
// function list(names){
//   let str = '';
//   if (names.length !== 0) {
//     let last = names.pop();
//     str = names.map( (val, i, arr) => {
//       if (i !== arr[arr.length - 1]) {
//         return val.name;
//       }
//     }).join(', ')
     
//     str += str !== '' ? ' & ' + last.name : last.name;
//   }
   
//   return console.log(str);
// }
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''