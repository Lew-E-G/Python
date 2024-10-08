const prompt = require("prompt-sync")();

const kontacts = []

function printInfo() {
    console.log("KONTACTS")
    console.log("Contact Management System")
    console.log("--------------------------")
    console.log("1.Add a Kontact")
    console.log("2.Delete a Kontact")
    console.log("3.View Kontacts")
    console.log("4.Search Kontacts")
    console.log("5.Exit")
}
printInfo()

function addKontact() {
    const name = prompt("Kontact name: ")
    const email = prompt("Kontact email: ")
    const number = prompt("Kontact number: ")
    const kontact = {
        name: name,
        email: email,
        number: number
    }
    kontacts.push(kontact)
    console.log("Kontacts updated!")
}

function deleteKontact(kontacts) {
    for (let i = 0; i < kontacts.length; i++) {
        const kontact = kontacts[i]
        console.log((i + 1).toString()+":", kontact.name)
    }
    
    const number = parseInt(prompt("Select an ID: "))
    if (number > kontacts.length) {
        console.log("Invalid choice")
        return
    }
    kontacts.splice(number - 1, 1)
    console.log("Kontacts updated")
}

function listKontacts(kontacts) {
    for (let kontact of kontacts) {
        console.log("Name:", kontact.name)
        console.log("Email:", kontact.email)
        console.log("Number:", kontact.number)
        console.log("-----")
        }
}

function searchKontact() {
    const searchString = prompt("Search: ").toLocaleLowerCase()
    const results = [];

    for (let kontact in kontacts) {
        if (kontact.name.toLocaleLowerCase().includes(searchString)) results.push(kontact)
    }

    listKontacts(results)
}

let loopBreaker = true
while (loopBreaker) {
    const number = prompt("Select an operation (1-5): ")

    switch (number) {
        case "1":
            addKontact()
            break;
        case "2":
            deleteKontact(kontacts)
            break;
        case "3":
            listKontacts(kontacts)
            break;
        case "4":
            searchKontact()
            break;
        case "5":
            loopBreaker = false
            break;
        default:
            console.log("unknown")
            break;

    }
}

