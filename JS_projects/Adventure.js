const prompt = require("prompt-sync")() //creating a varibale for fetching pf user input, external module (prompt-sync) may be required
const name = prompt("Please enter your name: ")
console.log("Welcome",name)

const shouldWePlay = prompt("Would you like to play Lewis' Life Lessons?")
const condition = shouldWePlay.toLowerCase() === "yes"

if (shouldWePlay.toLowerCase() === "yes") {
    console.log("Great, please make youre choice by typing either 'left' or 'right'")
    const firstTurn = prompt("You are hiking Ben Nevis with some friends, and you come to a fork in the road.\nYour friends have chosen to turn right, what path do you choose? ")
    if (firstTurn === "left") {
        console.log("Well you 'left' your troubles behind. You Win!")
    } else if (firstTurn === "right") {
        console.log("Sorry, you your friends 'right' off a cliff. You Lose :(")
    } else {
        console.log("Invalid input")
    }
}else if (shouldWePlay.toLowerCase() === "no") {
    console.log("That a shame, see you again soon")
} else {
    console.log("invalid input")
}