# Given an integer N, print the following pattern.
# * * * *
# * * * *
# * * * *
# * * * *

def printPattern(N):
    patternStr = ""
    for i in range(N):
        print("* "*N)

printPattern(5)