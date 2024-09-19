# xfile = input('whats the name of the file: ')
# try:
#     xfile = open(xfile, 'r')
# except:
#     print(f'{xfile} could not be opened')
#     quit()

###opens reads and closes the file
xfile = open("veggies.txt",'r')
read_file = xfile.read()
xfile.close()

rv_list = []
rv_dict = {}
words = {} #empty dictionary to work with
list = read_file.split() #splits the words in the file to items in a list
large_count = None
large_name = None

for word in list:
    cleaned_word = word.replace(',', '') #removes commas from the list entry
    words[cleaned_word] = words.get(cleaned_word,0) +1 #This checks to see if the word from the list is in the dictionary, if not it will add it and if so it will add 1 to the counter
    # if cleaned_word in dict:
    #     dict[cleaned_word] += 1
    # else:
    #     dict[cleaned_word] = 1

while True:
    # Display the menu of options to the user.
    print("\n------------\nWord Counter\n------------")
    print("1. Search word")
    print("2. Show words alphabetically")
    print("3. Show words by most common")
    print("4. Show most common word")
    print("5. Quit")

    choice = input("Enter your choice: ")

    #asks the user what word they would like to search for
    if choice == '1':
        word = input("What word would you like to search for?\n")
        if word in words:
            print(f"{word} appears {words[word]} times in the file")
        else:
            print(f'The key {word} doesnt appear in file')

    #prints the whole dictionary, sorts them by alphabetical words
    elif choice == '2':
        for key,value in sorted(words.items()):
            print(key, value)

    #prints the whole dictionary, sorts them by most common word
    #lambda is saying to treat the item as the second value in the tuple [1] which is the number
    elif choice == '3':
        #for key,value in sorted(words.items(), key=lambda item: item[1], reverse=True):
        for key, value in sorted(words.items()):
            rv_list.append((value,key))
        for key, value in sorted(rv_list, reverse=True):
            print(value,key)

    #show the most common word
    elif choice == '4':
        for key,value in words.items():
            if large_name == None or value > large_count:
                large_name = key
                large_count = value
        print(large_name, large_count)

    #quits the program
    elif choice == '5':
        # If the user chooses to quit, exit the program.
        print("Goodbye!")
        break

    else:
        # Handle invalid choices.
        print("Invalid choice. Please try again.")