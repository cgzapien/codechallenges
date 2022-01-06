function goldMedal() {

  const array1= [];
  
  for (var i = 0; i < 3; i++) {
      array1.push([])
        for(let x = 0; x < 3; x++) {
          array1[i].push(0)
        }
  }
  console.log(array1);
}

// Create an array that mimics a grid like the following using nested for loops:
  // [ [0, 0, 0],
  // [0, 0, 0],
  // [0, 0, 0] ]
  goldMedal()