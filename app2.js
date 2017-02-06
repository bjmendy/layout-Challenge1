// var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben",
// "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];
for(i = 0; i <= 14; i++){
	console.log(classmates[i]);
}

// (classmates[i]) <----access the array

// Write a for loop that will iterate from 50 to 20. For each iteration, if the current number is a multiple of 3, console.log the value.

for (i = 50; i >= 20; i--){
	if (i % 5 ===0) {
		console.log(i)
	}
}

// Write out an "infinite loop" below. Don't run the loop in your console unless you are prepared to force quit your browser!!

for (i = 0; i === i; i++){
	console.log(i)
}


// Create a new array with the gluten-free options from this menu:
var menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true}, {name: "donut", glutenFree: false},{name: "steak", glutenFree: true}, {name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

var removedItem = menu.splice(1, 3, 6)
	console.log("gluten-free");