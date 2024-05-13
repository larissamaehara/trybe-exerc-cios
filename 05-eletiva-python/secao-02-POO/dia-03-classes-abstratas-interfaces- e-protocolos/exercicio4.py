# Exercício 4
# Quando executamos o mypy no código a seguir, recebemos o erro error: Cannot instantiate abstract class "Triangle"
# with abstract attribute "calculate_perimeter" [abstract].
# Corrija-o para que o mypy retorne a mensagem de sucesso.

from typing import Protocol

class CalculatePerimeter(Protocol):
    def calculate_perimeter(self) -> str:
        pass
    
class Square(CalculatePerimeter):
    def __init__(self, side: int) -> None:
        self.side = side
        
    def calculate_perimeter(self) -> str:
        return f"O perímetro do quadrado é {self.side * 4} cm"
    
class Triangle(CalculatePerimeter):
    def __init__(self, side_1: int, side_2: int, side_3: int) -> None:
        self.side_1 = side_1
        self.side_2 = side_2
        self.side_3 = side_3

    def calculate_area(self) -> str:
        return f"O perímetro do triângulo é de {self.side_1 + self.side_2 + self.side_3} cm"


triangle = Triangle(5, 5, 5)
print(triangle.calculate_area())

    
square = Square(5)
print(square.calculate_perimeter())