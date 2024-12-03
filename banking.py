# Python Banking Program

def print_separator():
    """Prints a separator line for better visual formatting."""
    print("*********************")

def show_balance(balance):
    """
    Displays the current balance with proper formatting.
    
    Args:
        balance (float): The current account balance.
    """
    print_separator()
    print(f"Your balance is ${balance:.2f}")  # Display balance formatted to 2 decimal places
    print_separator()

def deposit():
    """
    Handles depositing money into the account.
    
    Returns:
        float: The amount to be deposited. Returns 0 if the input is invalid or negative.
    """
    print_separator()
    try:
        amount = float(input("Enter an amount to be deposited: "))  # Ask user for deposit amount
        if amount <= 0:  # Ensure the deposit amount is positive
            print("Amount must be greater than 0.")  # Inform user of invalid input
            return 0
        return amount  # Return valid deposit amount
    except ValueError:  # Handle non-numeric inputs
        print("Invalid input. Please enter a valid number.")
        return 0

def withdraw(balance):
    """
    Handles withdrawing money from the account.
    
    Args:
        balance (float): The current account balance.
    
    Returns:
        float: The amount to withdraw. Returns 0 if the input is invalid, negative, or exceeds the balance.
    """
    print_separator()
    try:
        amount = float(input("Enter amount to be withdrawn: "))  # Ask user for withdrawal amount
        if amount <= 0:  # Ensure the withdrawal amount is positive
            print("Amount must be greater than 0.")
            return 0
        if amount > balance:  # Check if there are sufficient funds
            print("Insufficient funds.")
            return 0
        return amount  # Return valid withdrawal amount
    except ValueError:  # Handle non-numeric inputs
        print("Invalid input. Please enter a valid number.")
        return 0

def main():
    """
    Main function to run the banking program.
    Handles the main menu loop and user interaction.
    """
    balance = 0.0  # Initialize account balance to zero
    while True:
        # Display the main menu
        print_separator()
        print("   Banking Program   ")
        print_separator()
        print("1. Show Balance")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Exit")
        print_separator()

        # Handle menu choice with error checking
        try:
            choice = int(input("Enter your choice (1-4): "))  # Prompt user for menu choice
        except ValueError:  # Handle non-numeric inputs
            print("Invalid input. Please enter a number between 1 and 4.")
            continue  # Restart the menu loop

        # Perform actions based on user choice
        if choice == 1:
            show_balance(balance)  # Display the current balance
        elif choice == 2:
            balance += deposit()  # Add the deposit amount to the balance
        elif choice == 3:
            balance -= withdraw(balance)  # Subtract the withdrawal amount from the balance
        elif choice == 4:
            # Exit the program gracefully
            print_separator()
            print("Thank you! Have a nice day!")
            print_separator()
            break  # Exit the loop
        else:
            # Handle invalid menu choices
            print("Invalid choice. Please select a valid option.")

if __name__ == '__main__':
    # Run the main function only if the script is executed directly
    main()
