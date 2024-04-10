# 🚀 Exercício 1:
# Filas: crie uma classe Queue, onde deve conter as operações: enqueue, dequeue, peek e is_empty.

import LinkedList  # type: ignore
import Node  # type: ignore

class Queue:

    def __init__(self):
        self.__data = LinkedList()

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.insert_last(value)

    def dequeue(self):
        return self.__data.remove_first()

    def peek(self):
        return self.__data.get_element_at(0)
    