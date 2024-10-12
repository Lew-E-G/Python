//This demonstrates JSON parsing of data, use of embedded sorting function
const prompt = require("prompt-sync")()
const fs = require("fs")

function loadQuestions() {
    try {
        const data = fs.readFileSync("questions.json", "utf8")
        const questions = JSON.parse(data).questions
        return questions
    }
    catch (e) {
        console.log("Error occured", e)
        return []
    }
}

function getRandomQuestions(questions, numQuestions) {
    if (numQuestions > questions.length) {
        numQuestions = questions.length
    }

    const shuffled = questions.sort(() => {
        return 0.5 - Math.random()
    })
    return shuffled.slice(0, numQuestions)
}

function askQuestion(question) {
    console.log(question.question)
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i]
        console.log(`${i + 1}. ${option}`)
    }
    const choice = parseInt(prompt("Enter a number: "))
    if (isNaN(choice) || choice < 1 || choice > question.options.length) {
        console.log("Invalid. Incorrect choice")
        return false
    }
    const choiceValue = question.options[choice - 1]
    return choiceValue === question.answer
}

const numOfQuestions = parseInt(prompt("Please choose the number of questions: ")) 
if (isNaN(numOfQuestions) || numOfQuestions < 1 || numOfQuestions > questions.length) {
    console.log("Invalid. Incorrect choice")
    return false
}
const questions = loadQuestions()
const randomQuestions = getRandomQuestions(questions, numOfQuestions)

let correct = 0;
const startTime = Date.now()

for (let question of randomQuestions) {
    const isCorrect = askQuestion(question)
    console.log()
    if (isCorrect) correct++
}

const totalTime = Date.now() - startTime
console.log("Correct:", correct)
console.log("Time: ", (totalTime / 1000)+"s")
console.log("Score: ", Math.round((correct / numOfQuestions) * 100) + "%")