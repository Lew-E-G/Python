import time

#The loop that asks for the users int
while True:
    timer = input('How many seconds would you like to countdown?: ')
    #
    if timer == 'q':
        quit()
    else:
        #error handling, checks if the users input can be turned to an int
        try: 
            int(timer)
            break
        except:
            print('sorry thats not a valid number')
            #if this fails then it will reset the while loop

#this is the countdown using range to count from the users number to 0
for num in range(int(timer),0,-1):
    print(num)
    #this is the 1 second delay between iterations
    time.sleep(1)

#closing message when the count reachs 0
print('Suprise Motherfucker!')