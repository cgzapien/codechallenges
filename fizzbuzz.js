function fizzbuzz(n) {
  for(let i = 1; i <= n; i++) {
    if(i % 15 == 0) {
      console.log(i + " fizzbuzz")
    } else {
      console.log(i)
    }
  }

}
fizzbuzz(16)