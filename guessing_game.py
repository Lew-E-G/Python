import random

# Function to get a valid integer input from the user
def get_integer(prompt):
    while True:
        temp = input(prompt)
        if temp.isnumeric():
            return int(temp)
        
        print(f"{temp} is not a valid number")

# Set the highest number for the guessing range
highest = 100

# Generate a random number between 1 and 'highest'
answer = random.randint(1, highest)
print(answer)   # TODO: remove after testing

# Initialize guess variable
guess = 0

# Print instructions for the user (old f string)
print("Guess a number between 1 and {}: ".format(highest))

# Main game loop
while answer != guess:
    # Get user's guess
    guess = get_integer(": ")

    # Check if user wants to quit (by entering 0)
    if guess == 0:
        break
    else:
        # Provide hints based on the guess
        if guess < answer:
            print("Please guess higher")
        elif guess > answer:
            print("Please guess lower")

# Check if the user guessed correctly
if guess == answer:
    print("Well done, you guessed it!")