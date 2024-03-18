#!/usr/bin/python3

def no_c(my_string):

    NewStr = ""
    for i in my_string:
        if ord(i) != 99 or ord(i) != 99 - 32:
            NewStr += i
    return (NewStr)
