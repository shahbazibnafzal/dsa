# Given an integer N, print the following pattern.
# *
# * *
# * * *
# * * * *
# * * * * *

def printPattern(N):
    for i in range(N):
            print("* "*i)
    

printPattern(5)