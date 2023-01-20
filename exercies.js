//TODO: Exercise of day 17 part 2: 16/1/2023

//?1-Use an Array to Store a Collection of Data

/*
let yourArray = ["a", 2, true, "c", null, { name: "john" }];
console.log(yourArray);
*/

//?2-Access an Array's Contents Using Bracket Notation

/*
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "Is this b"
// Only change code above this line
console.log(myArray);
*/

//TODO: Exercise of day 18 : 20/1/2023

//?3-Add Items to an Array with push() and unshift()

/*
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift("I", 2, "three"); //The unshift() in this case will add the elements to the beginning of the array
  arr.push(7, "VIII", 9); //the push() in this case will do the opposite.
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
*/

//?4-Remove Items from an Array with pop() and shift()

/*
function popShift(arr) {
  let popped = arr.pop(); // Change this line // the pop() which makes the last element of what is requested
  let shifted = arr.shift(); // Change this line // the shift() delete the element but before
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
*/


//?5-Remove Items Using splice()

/*
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4); //What it will do with the splice() that starts from the first position and takes the first 4 digits to remove you from that array
// Only change code above this line
console.log(arr);
*/

//?6-Add Items Using splice()

/*
function htmlColorNames(arr) {
  // Only change code below this line
arr.splice(0,2,"DarkSalmon","BlanchedAlmond"); //What this splice() does is that it starts from position 0 and next to it will remove 2 elements of which are the ones mentioned
  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
*/

//?7-Copy Array Items Using slice()

/*
function forecast(arr) {
  // Only change code below this line

  return arr.slice(2,4); //This code makes sure that from slice() the position 2 of the array starts there and in which 4 shows the variables that will be displayed.
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
*/

//?8-Copy an Array with the Spread Operator

/*
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
      newArr.push([...arr]); // What this code does is create a new array within itself. Of which, the one that showed will be repeated again.
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
*/

//?9-Combine Arrays with the Spread Operator

/*
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line 
  //What this line of code does is that a spread (...) is added to that array so that it can be joined with other variables in that array.
  return sentence;
}

console.log(spreadOut());
*/

//?10-Check For The Presence of an Element With indexOf()

/*
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) != -1; // This code is in charge of checking if with indexOf() the element is in the array.
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

//?11-Iterate Through All an Array's Items Using For Loops

