const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  if (i === ingredients.length -1 ) {
    console.log('\n');
  }
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
  if (i === ingredients.length -1 ) {
    console.log('\n');
  }
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let j = ingredients.length - 1;
while (j > -1) {
  console.log(ingredients[j]);
  j--;
}
