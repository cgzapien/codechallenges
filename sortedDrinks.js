
function sortedDrinks(drinks){
  drinks.forEach(drink => console.log(drink.price))
}

const drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
sortedDrinks(drinks)