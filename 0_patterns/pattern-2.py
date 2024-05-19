# Given an integer N, print the following pattern.
# 1
# 12
# 123
# 1234
# 12345

def printPattern(N):
    for i in range(N):
        pattern = ""
        for j in range(i+1):
            pattern += str(j+1)
        print(pattern)
    
printPattern(5)