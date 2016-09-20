/* The sum of a range

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */

// Your code here.
function range(start, end, increment) {
	if (increment == null)
		increment = 1;
	var output = [];
	var length = Math.abs(end - start);
	for (var i = 0; i <= length; i++){
		output.push(start);
		start += increment;
	}
	return output;
}

var sum = function(inputArray){
	total = 0;
	for (var i = 0; i < inputArray.length; i++){
		total += inputArray[i];
	}
	return total;
}

console.log("Range of numbers from 1 to 10:");
console.log(range(1, 10));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Range from 5 to 2 with increment of -1:");
console.log(range(5, 2, -1));
//  [5, 4, 3, 2]
console.log("Sum of numbers in range 1 to 10");
console.log(sum(range(1, 10)));
//  55



/* Reversing an array

For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method. */

// Your code here.

function reverseArray(inputArray){
	var output = [];
	var halflength = inputArray / 2;
	for (var i = 0, j = inputArray.length - 1; i < inputArray.length; i++, j--){
		output[i] = inputArray[j];
	}
	return output;
}

function reverseArrayInPlace(inputArray){
	for (var i = 0, j = inputArray.length -1; i < (inputArray.length / 2); i++, j--){
		var old = inputArray[i];
		inputArray[i] = inputArray[j];
		inputArray[j] = old;
	}
}

console.log("Reverse elements in [A, B, C, D, E]");
console.log(reverseArray(["A", "B", "C", "D", "E"]));
// → ["C", "B", "A"];
console.log("Reverse elements in [1, 2, 3, 4, 5, 6, 7]");
var arrayValue = [1, 2, 3, 4, 5, 6, 7];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



