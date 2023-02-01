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

//TODO: Exercise of day 19: 26/1/2023

//?11-Iterate Through All an Array's Items Using For Loops
/*
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [-2, -4, -5]], 3));
*/

//?12-Create complex multi-dimensional arrays
/*
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ["deep"]],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[[["deepest"]]]]
  //What was done is that in the last 3 lines, at the end of the array, a multidimensional array was added. 
  //As in the third = deep, in the fourth deepest with double array and the fifth deepest as triple array.
  // Only change code above this line
];

console.log(myNestedArray)
*/

//TODO: Exercise of day 20: 1/2/2023

//?13-Add Key-Value Pairs to JavaScript Objects

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas  = 13; 
foods.grapes  = 35;
foods.strawberries   = 27;
//What was done that the object added properties and values to the object.
// Only change code above this line

console.log(foods);
*/

//?14-Modify an Object Nested Within an Object

/*
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45; 
//In this answer, it shows that in an object. A value can be added inside another object or in this case a property and value.
// Only change code above this line

console.log(userActivity);
*/

//?15-Access Property Names with Bracket Notation

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
 return foods[scannedItem]; //This shows me with the value of the parameter, the response of the property of that object.
  // Only change code above this line
}

console.log(checkInventory("apples"));
*/

//?16-Use the delete Keyword to Remove Object Properties

/*
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries ;
//Which takes care of removing some properties of the object with delete.
// Only change code above this line

console.log(foods);
*/

//?17-Check if an Object has a Property

/*
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
 return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  ); // This returns the properties of the user object. 
     //So that the arrow function calls all the properties of the user object. Where mention if it is false or true.
  // Only change code above this line
}

console.log(isEveryoneHere(users));
*/

//?18-Iterate Through the Keys of an Object with a for...in Statement

/*
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  //A variable is created to display each result. Then a for is created where each user will be called. 
  //To check if it is equal to true and if it is false. No results are displayed.
  // Only change code above this line
}

console.log(countOnline(users));
*/

//?19-Generate an Array of All Object Keys with Object.keys()

/*
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj); //This returns me an object. Where it will show me each key, that is, each property of that object. 
  // Only change code above this line
}

console.log(getArrayOfUsers(users));
*/

//?20-Modify an Array Stored in an Object

