console.log("Hello my name is " + "DS"); // Output: Hello my name is DS

let str1 = 'Hello, World!';
let str2 = "JavaScript is awesome!";
let str3 = '12345'; // This is also a string, not a number

console.log(str1, str2); //Output: Hello, World! JavaScript is awesome!

let firstname = "Darshil";
let middlename = "Jigneshbhai";
let lastname = "Soni";
let fullname = firstname + " " + middlename + " " + lastname;

console.log(fullname); // Output: Darshil Jigneshbhai Soni

// Solution 1: Getting the length of a string

let message = "Oppenheimer!";
let messageLength = message.length;
console.log(messageLength); // Output: 12

// Solution 2: Converting a string to Uppercase or Lowercase

let text = "Batman: Dark Knight Joker is the best villain ever!"
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();

console.log(upperCaseText);
console.log(lowerCaseText);

// Soultion 3: 

// Concatenation example

const Name = "Darshil Soni";
const age = 25;

console.log(
    "Hello it's me " + Name + " and my age is " + age + " and I will be pro at this. "
);

console.log(`Hello it's me ${Name} and my age is ${age} and this is an example of Concatenation`);

// If Else Statement

const Age = 17;

if (Age >= 18) {
    console.log("You are Adult");
} else {
    console.log("You are Minor");
}

// Solution 1: Determine if a number is Positive or Negative

function checkNumberSign(number) {
    if (number > 0) {
        console.log("The number is Positive.");
    } else if (number < 0) {
        console.log("The number is Negative.");
    } else {
        console.log("The Number is Zero.");
    }
}

checkNumberSign(10); // The output should be 'Positive' as given input value i,e., 10
checkNumberSign(-10); // The output should be 'Negative'. As -ve sign indicates negative numbers in mathematics.
checkNumberSign(0); // The output should be 'Zero'.

// Solution 2: Check if a person is eligible for voting

function checkVotingEligibilty(age) {
    if (age >= 18){
        console.log("You are eligible for voting.")
    } else {
        console.log("Sorry! You cannot vote yet!")
    }
}

checkVotingEligibilty(10); // Output: Sorry! You cannot vote yet!
checkVotingEligibilty(22); // Output: You are eligible for voting!

// Solution 3: Check if a person's username and password are correct

function authenticateUser(username, password) {
    const validUsername = "darshil1";
    const validPassword = "pass123";
    
    if(username === validUsername && password === validPassword) {
        console.log("Authentication successful, Welcome! " + username + "!");
    } else {
        console.log("Authentication failed! Invalid Username or password combination.");
    }
}

authenticateUser("user1", "pass123"); // Output: Authentication Failed! Invalid Username or password combination. 
authenticateUser("darshil1", "pass123");// Output: Authentication Successful - welcome darshil1 !

// Test of all the things learned 24/07 (variables, Booleans, functions, strings, concatenation, if else elements)

// 1:  Determine if a person is eligible for a discount based on their age.

function checkDiscountEligibility(age) {
    const minimumAge = 21;
    const isAdult = false;
    if (age >= minimumAge || isAdult) {
        return "You are eligible to Drink Alcohol.";
    } else {
        return `Unfortunately you have not reached the required Age of ${minimumAge}.`;
    }
}

let customerAge = 25;
console.log(checkDiscountEligibility(customerAge));
// Output: You are eligible to Drink Alcohol.

let minorAge = 15;
console.log(checkDiscountEligibility(minorAge));
// Output: Unfortunately you have not reached the required Age of 21.

// 2: Generate a welcome message based on a user's name and language preference.

function generateWelcomeMessage(name, language) {
    let greetingText = "";
    if (language === "english") {
        greetingText = "Hello, " + name + "!";
    } else if (language === "spanish"){
        greetingText = "¡Hola, " + name +"!";
    } else {
        greetingText = "Welcome, " + name + "!";
    }

    return greetingText;
}

let userName = "Darshil";
let userLanguage = "english";
console.log(generateWelcomeMessage(userName, userLanguage));

let userName2 = "Niyu";
let userLanguage2 = "spanish";
console.log(generateWelcomeMessage(userName2, userLanguage2));
