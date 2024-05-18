#!usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Sobia Isb Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter Your Guess Number (Number Limit from 1 to 9):",
    }
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed the correct number.");
}
else {
    console.log("Sorry, you guessed the wrong number. Please try again.");
}
