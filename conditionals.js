const temperature = 12;

if (temperature < 0) {
	console.log("Make sure you pick out a scarf!");
}

else if (temperature < 15) {
	console.log("Short sleeves won't cut it!");
}
else {
	console.log("Short sleeves are fine!");
}

console.log("Now you're ready to go outside!");

//logical operators
let isCitizen = true;
let age = 20;

if (isCitizen && age >= 18) {
	console.log("Is eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
	console.log("Maybe it is a good idea to stay in today.");
}

let raining = false;

if (!raining) {
	console.log("Don't need your umbrella today!");
}
