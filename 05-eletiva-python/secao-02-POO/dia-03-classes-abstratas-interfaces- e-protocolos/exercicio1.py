# Exercício 1
# Crie uma classe abstrata base chamada Person que contenha um método abstrato chamado print_role (imprimir cargo). 
# Além disso, crie duas subclasses que terão implementações concretas da classe base abstrata.
# São elas: Seller e Manager.
# O método print_role deverá imprimir “Meu cargo é de vendedor” e “Meu cargo é de gerente” respectivamente.

from abc import ABC, abstractmethod


class Person(ABC):
    @abstractmethod
    def print_role(self) -> None:
        pass


class Seller(Person):
    def print_role(self) -> None:
        print("Meu cargo é de vendedor.")


class Manager(Person):
    def print_role(self) -> None:
        print("Meu cargo é de gerente.")


seller = Seller()
seller.print_role()

manager = Manager()
manager.print_role()
