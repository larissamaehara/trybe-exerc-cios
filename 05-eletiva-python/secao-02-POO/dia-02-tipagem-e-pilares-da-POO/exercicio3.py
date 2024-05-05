# Exercício 3
# Crie uma classe chamada Vehicle, que possui um atributo name do tipo string,
# capacity do tipo inteiro e um método move, que recebe um parâmetro distance do tipo inteiro e que
# retorna a mensagem '{self.name} carried {self.capacity} people across {distance} kilometers.'.

## Crie uma classe Car que herda de Vehicle e modifica o método move para indicar,
# no começo da frase já existente, que foi especificamente um carro que levou as pessoas. 

# Crie uma classe Motorcycle que herda de Vehicle e que tem capacidade fixada em 2.

# Faça um print das mensagens de um carro e de uma moto se movendo.

class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return (
            f"{self.name} carried {self.capacity} people across {distance} "
            "kilometers."
        )


class Car(Vehicle):
    def move(self, distance: int) -> str:
        return f"Car {super().move(distance)}"


class Motorcycle(Vehicle):
    def __init__(self, name: str) -> None:
        self.name = name
        self.capacity = 2


my_car = Car(name="Opala", capacity=4)
my_bike = Motorcycle(name="Factor 125")

print(my_car.move(10)) # Car Opala carried 4 people across 10 kilometers.
print(my_bike.move(10)) # Factor 125 carried 2 people across 10 kilometers.