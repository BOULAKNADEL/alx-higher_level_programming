#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

if number > 0:
    lastDigit = number % 10
else:
    lastDigit = number % -10

print(f"last digit of {number} is {lastDigit} and", end=" ")

if lastDigit > 5:
    print("is greater than 5")
elif lastDigit == 0:
    print("is zero")
elif lastDigit < 6 and lastDigit != 0:
    print("is less than 6 and not 0")
