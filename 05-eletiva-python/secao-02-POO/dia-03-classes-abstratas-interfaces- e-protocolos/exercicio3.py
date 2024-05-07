# Exercício 3
# Crie um protocolo chamado CalculatePerimeter que contenha um método abstrato chamado calculate_perimeter.
# Crie uma classe chamada Square que implemente o protocolo CalculatePerimeter
# e o método calculate_perimeter para calcular o perímetro do quadrado.

from typing import Protocol

class CalculatePerimeter(Protocol):
    def calculate_perimeter(self) -> str:
        pass
    
class Square(CalculatePerimeter):
    def __init__(self, side: int) -> None:
        self.side = side
        
    def calculate_perimeter(self) -> str:
        return f"O perímetro do quadrado é {self.side * 4} cm"
    
square = Square(5)
print(square.calculate_perimeter())
