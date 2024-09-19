# Create an empty list to store tasks.
tasks = []

# Start an infinite loop for the to-do list program.
while True:
    # Display the menu of options to the user.
    print("\nTo-Do List Menu:")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark task as complete")
    print("4. Remove task")
    print("5. Quit")

    # Collect the user's choice.
    choice = input("Enter your choice: ")

    # Handle different menu choices based on user input.
    if choice == '1':
        # If the user chooses to add a task, prompt for input and add it to the list.
        task = input("Enter a new task: ")
        #append the inputted task to the task list
        tasks.append(task)
        print("Task added!")

    elif choice == '2':
        # If the user chooses to view tasks, display the list of tasks.
        print("\nTasks:")
        #for loop which prints the number of the task (index) and the task itself (task) from the tasks list
        for index, task in enumerate(tasks, start=1):
            print(f"{index}. {task}")

    elif choice == '3':
        # If the user chooses to mark a task as complete, ask for the task number and update it.
        index = int(input("Enter the task number to mark as complete: ")) - 1
        if 0 <= index < len(tasks):
            tasks[index] += " (Completed)"
            print("Task marked as complete!")

    elif choice == '4':
        # If the user chooses to remove a task, ask for the task number and remove it from the list.
        index = int(input("Enter the task number to remove: ")) - 1
        if 0 <= index < len(tasks):
            removed_task = tasks.pop(index)
            print(f"Removed: {removed_task}")

    elif choice == '5':
        # If the user chooses to quit, exit the program.
        print("Goodbye!")
        break

    else:
        # Handle invalid choices.
        print("Invalid choice. Please try again.")


