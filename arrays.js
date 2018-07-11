var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]
 
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  console.log(array)
  return array
}

console.log (destructivelyAddElementToBeginningOfArray(chocolateBars, hersheys))