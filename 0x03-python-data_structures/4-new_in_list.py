#!/usr/bin/python3

def new_in_list(my_list, idx, element):

    listCopy = my_list[:]
    if my_list:
        for i in my_list:
            if idx < 0 or idx >= len(my_list):
                return (listCopy)
            listCopy[idx] = element
            return (listCopy)
