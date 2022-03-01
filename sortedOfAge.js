/*
Returns a list of everyone older than 18, which is
sorted alphabetically by last name, and where
each name and age is embedded in a string that looks like an HTML <li> element.
 */

function sortedOfAge(arr){
  console.log('arr: ', arr);
  // for(let i = 0; i < arr.length; i++){
  //   if(person.age > 18){
  //     return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
  //   }
  // }
}

console.log(sortedOfAge(peopleArray));

/*
Output: 
[ 
   "<li>Kyle Mooney is 27</li>",
   "<li>Sarah Palin is 47</li>",
   "<li>Rick Sanchez is 78</li>",
   "<li>Morty Smith is 29</li>",
   "<li>Lev Tolstoy is 82</li>" 
]
*/

var peopleArray = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  }
]