//--------------------------------------------------
// JS4B - Homework - Challenge Part 1
//--------------------------------------------------

// 1/2: Create two variables for your favorite number and some other random number

const myFavoriteNumber= 8;
let someOtherNumber= 5;

// 3: Calculate the two numbers multiplied

let multipliedNumbers= myFavoriteNumber * someOtherNumber;

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT

console.log(multipliedNumbers);

// 4/5: Store your first name in a variable and your last name in another

const firstName = "Sofia"; 
const lastName = "Rodas";

// 6: Store your full name in a variable by adding the two variables
const fullName= firstName + " " + lastName;


// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(fullName);


// 7: Store your firstName, lastName, favColor and hometown in an object called myDetails

const myDetails = {
  firstName: "Sofia",
  lastName: "Rodas",
  favColor: "Purple",
  homeTown: "New York",
};

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(myDetails);


// 8: Using the data from your myDetails variable, create a one sentence bio and store it as a string.

const myBio = `Hi, my name is ${myDetails.firstName} ${myDetails.lastName}. I am from ${myDetails.homeTown} and my favorite color is ${myDetails.favColor}.`;

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(myBio);


// 9: Create an array called dreamDestinations with your top 5 travel destinations.

const dreamDestinations = [
  "Greece",
  "Maldives",
  "Australia",
  "Ireland",
  "New Zealand", 
]

// UNCOMMENT THE LINE BELOW TO PRINT THE RESULT
console.log(dreamDestinations);


//--------------------------------------------------
// JS4B - Homework - Challenge Part 2
//--------------------------------------------------

// 10: Write a loop that logs 'hello' to the console 10 times
for (let i = 0; i < 10; i++) {
  console.log ('hello');

}
// // 11: Use a WHILE loop to add 1 to 'count' 100 times
let count = 0;

while (count < 100) {
  count += 1;
}

console.log(count);


// Console log the new value of count

// 12: Print the even numbers between 1 and 100

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}


// 13: Print your top five travel destinations to the console using a for loop.

// let dreamDestinations = ['Japan', 'New Zealand', 'Iceland', 'Italy'];

//for (let i = 0; i < dreamDestinations.length; i++) {
 // console.log(`One day soon, I will visit ${dreamDestinations[i]}`);
//}

