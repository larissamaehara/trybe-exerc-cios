# Exercício 5
# Crie uma classe chamada Rectangle que represente um retângulo com os atributos base e height.
# A classe deve ter métodos para calcular a área e o perímetro do retângulo.

class Rectangle:
    def __init__(self, base: int, height: int) -> None:
        self.base = base
        self.height = height

    def calculate_area(self) -> int:
        return self.base * self.height

    def calculate_perimeter(self) -> int:
        return 2 * (self.base + self.height)
