//This demonstrates JSON parsing of data, use of embedded sorting function
const prompt = require("prompt-sync")(); // Imports prompt-sync library to take input from the user via terminal
const fs = require("fs"); // Importing the 'fs' (File System) module to interact with the file system

// Function to load questions from a JSON file
function loadQuestions() {
    try {
        // Reads the file 'questions.json' synchronously and parses the JSON data
        const data = fs.readFileSync("questions.json", "utf8");
        const questions = JSON.parse(data).questions; // Extracts the 'questions' array from the JSON file
        return questions; // Returns the questions
    }
    catch (e) {
        // In case of an error (like file not found), prints the error and returns an empty array
        console.log("Error occured", e);
        return [];
    }
}

// Function to randomly shuffle and select a subset of questions
function getRandomQuestions(questions, numQuestions) {
    // If the requested number of questions is greater than available, use all available questions
    if (numQuestions > questions.length) {
        numQuestions = questions.length;
    }

    // Shuffles the questions array using sort and Math.random()
    const shuffled = questions.sort(() => {
        return 0.5 - Math.random(); // Randomizes the sorting of questions
    });

    // Returns the first 'numQuestions' from the shuffled array
    return shuffled.slice(0, numQuestions);
}

// Function to ask a question to the user
function askQuestion(question) {
    console.log(question.question); // Prints the question text
    // Loops through each option and prints it
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        console.log(`${i + 1}. ${option}`); // Display options with numbering
    }

    // Prompts the user to enter their answer (as a number)
    const choice = parseInt(prompt("Enter a number: "));
    // If the input is invalid (non-number or out of range), return false
    if (isNaN(choice) || choice < 1 || choice > question.options.length) {
        console.log("Invalid. Incorrect choice");
        return false;
    }

    // Get the value of the selected option and compare it with the correct answer
    const choiceValue = question.options[choice - 1];
    return choiceValue === question.answer; // Return true if the answer is correct, false otherwise
}

// Prompt the user to choose the number of questions for the quiz
const numOfQuestions = parseInt(prompt("Please choose the number of questions: "));
if (isNaN(numOfQuestions) || numOfQuestions < 1 || numOfQuestions > questions.length) {
    console.log("Invalid. Incorrect choice"); // Validate the input to ensure it's a valid number within the range
    return false; // If invalid input, exit the program
}

const questions = loadQuestions(); // Load the questions from the JSON file
const randomQuestions = getRandomQuestions(questions, numOfQuestions); // Get a set of random questions

let correct = 0; // Counter for correct answers
const startTime = Date.now(); // Record the start time of the quiz

// Loop through each randomly selected question and ask it to the user
for (let question of randomQuestions) {
    const isCorrect = askQuestion(question); // Call the askQuestion function for each question
    console.log(); // Print an empty line for spacing
    if (isCorrect) correct++; // If the answer is correct, increment the correct counter
}

const totalTime = Date.now() - startTime; // Calculate the total time taken to complete the quiz
console.log("Correct:", correct); // Print the number of correct answers
console.log("Time: ", (totalTime / 1000) + "s"); // Print the time taken in seconds
console.log("Score: ", Math.round((correct / numOfQuestions) * 100) + "%"); // Calculate and print the score as a percentage
