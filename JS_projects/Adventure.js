const prompt = require("prompt-sync")() //creating a varibale for fetching pf user input, external module (prompt-sync) may be required
const name = prompt("Please enter your name: ")
console.log("Welcome",name)

const shouldWePlay = prompt("Would you like to play Lewis' Lazy Quest?")
const condition = shouldWePlay.toLowerCase() === "yes"

if (shouldWePlay.toLowerCase() === "yes") {
    console.log("Great, please make youre choice by typing either 'left' or 'right'")
    const firstTurn = prompt("You are standing at a fork in a forest path. Which path do you choose?")
    if (firstTurn === "left") {
        console.log("well done you have won")
    } else if (firstTurn === "right") {
        console.log("Unfortunatley you lost")
    } else {
        console.log("Invalid input")
    }
}else if (shouldWePlay.toLowerCase() === "no") {
    console.log("That a shame, see you again soon")
} else {
    console.log("invalid input")
}