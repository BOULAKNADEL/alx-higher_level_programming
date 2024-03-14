#!/usr/bin/python3

import calculator_1

if __name__ == "__main__":
    a = 10
    b = 5
    print("{} + {} = {}".format(a, b, calculator_1.add(a, b)), end=" ")
    print()
    print("{} - {} = {}".format(a, b, calculator_1.sub(a, b)), end=" ")
    print()
    print("{} * {} = {}".format(a, b, calculator_1.mul(a, b)), end=" ")
    print()
    print("{} / {} = {}".format(a, b, calculator_1.div(a, b)), end=" ")
    print()
