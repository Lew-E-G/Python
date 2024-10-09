//Demonstrates the use of objects, loops and arrays
const prompt = require("prompt-sync")(); // Import the prompt-sync library to handle user input via terminal

const kontacts = []; // Initialize an empty array to store contacts

// Function to print the main menu
function printInfo() {
    console.log("")
    console.log("--------------------------");
    console.log("KONTACTS");
    console.log("Contact Management System");
    console.log("--------------------------");
    console.log("1.Add a Kontact");
    console.log("2.Delete a Kontact");
    console.log("3.View Kontacts");
    console.log("4.Search Kontacts");
    console.log("5.Exit");
}

// Function to add a new contact
function addKontact() {
    // Prompt the user to input contact details
    const name = prompt("Kontact name: ");
    const email = prompt("Kontact email: ");
    const number = prompt("Kontact number: ");
    
    // Create a new contact object with the provided data
    const kontact = {
        name: name,
        email: email,
        number: number
    };
    
    // Add the contact to the kontacts array
    kontacts.push(kontact);
    console.log("Kontacts updated!"); // Confirm that the contact was added
}

// Function to delete a contact by selecting its index from the list
function deleteKontact(kontacts) {
    // Display all contacts with their index (starting from 1)
    for (let i = 0; i < kontacts.length; i++) {
        const kontact = kontacts[i];
        console.log((i + 1).toString() + ":", kontact.name); // Print index and name of each contact
    }
    
    // Ask the user to select a contact to delete by index
    const number = parseInt(prompt("Select an ID: "));
    
    // Validate if the user input is within the valid range
    if (number > kontacts.length) {
        console.log("Invalid choice");
        return;
    }
    
    // Remove the contact from the array based on the selected index
    kontacts.splice(number - 1, 1); // Adjust by -1 because array indices start at 0
    console.log("Kontacts updated"); // Confirm deletion
}

// Function to list all contacts
function listKontacts(kontacts) {
    // Loop through all contacts in the kontacts array
    for (let kontact of kontacts) {
        // Print out each contact's details
        console.log("Name:", kontact.name);
        console.log("Email:", kontact.email);
        console.log("Number:", kontact.number);
        console.log("-----");
    }
}

// Function to search for a contact by matching any property value (name, email, or number)
function searchKontact() {
    const searchString = prompt("Search: ").toLocaleLowerCase(); // Get search input and convert to lowercase
    const results = []; // Array to store search results

    // Loop through each contact in kontacts
    for (let kontact of kontacts) {
        // Loop through each value in the contact object (name, email, number)
        for (let value of Object.values(kontact)) {
            // Check if the search string matches any value in the contact
            if (value.toString().toLowerCase().includes(searchString)) {
                results.push(kontact); // Add contact to results if a match is found
            }
        }
    }

    // Display the matching contacts
    listKontacts(results);
}

// Main program loop that runs until the user chooses to exit
let loopBreaker = true; // Variable to control when to stop the loop
while (loopBreaker) {
    printInfo() // Call the function to print the menu once when the program starts
    const number = prompt("Select an operation (1-5): "); // Prompt the user to choose an option

    // Switch statement to handle user input and call the appropriate function
    switch (number) {
        case "1":
            addKontact(); // Add a contact
            break;
        case "2":
            deleteKontact(kontacts); // Delete a contact
            break;
        case "3":
            listKontacts(kontacts); // List all contacts
            break;
        case "4":
            searchKontact(); // Search contacts
            break;
        case "5":
            loopBreaker = false; // Exit the loop and end the program
            break;
        default:
            console.log("UNKNOWN"); // Handle invalid input
            console.log("")
            break;
    }
}
