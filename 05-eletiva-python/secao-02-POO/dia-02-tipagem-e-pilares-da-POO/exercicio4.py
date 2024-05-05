# Exercício 4
# Crie uma classe Animal com um atributo name e um método make_sound que imprime “Animal fazendo som”.
# Depois, crie uma classe Mammal que herda de Animal e tenha um método breastfeed.
# Por fim, crie uma classe Dog que herda de Mammal e tenha um método bark e imprima “Au au!”.

class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def make_sound(self) -> None:
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def bark(self) -> None:
        print(f"{self.name} faz au au!")


dog = Dog("Rex")
dog.make_sound() # Rex fazendo som
dog.breastfeed() # Rex amamentando
dog.bark() # Rex faz au au!
