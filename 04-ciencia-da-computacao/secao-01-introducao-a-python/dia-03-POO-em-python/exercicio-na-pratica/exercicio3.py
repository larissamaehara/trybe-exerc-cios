# Exercício 3: Implemente as classes das figuras geométricas
# Com base no diagrama abaixo, implemente as classes das figuras geométricas.

# Você deverá implementar as seguintes classes:

  # FiguraGeometrica, uma classe abstrata com os seguintes métodos abstratos
  # area
  # perimetro
  # Quadrado, que herda de FiguraGeometrica e adiciona o atributo lado
  # Retangulo, que herda de FiguraGeometrica e adiciona os atributos base e altura
  # Circulo, que herda de FiguraGeometrica e adiciona o atributo raio

from abc import ABC, abstractmethod
from math import pi as PI

class FiguraGeometrica(ABC):
  @abstractmethod
  def area(self):
    raise NotImplementedError
  
  @abstractmethod
  def perimetro(self):
    raise NotImplementedError
  
class Quadrado(FiguraGeometrica):
  def __init__(self, base, altura):
    self.base = base
    self.altura = altura
  
  def area(self):
    return self.base * self.altura
  
  def perimetro(self):
    return 2 * (self.base + self.altura)

class Retangulo(FiguraGeometrica):
  def __init__(self, base, altura):
    self.base = base
    self.altura = altura

  def area(self):
    return self.base * self.altura
  
  def perimetro(self):
    return 2 * (self.base + self.altura)
  
class Circulo(FiguraGeometrica):
  def __init__(self, raio):
    self.raio = raio
  
  def area(self):
    return PI * self.raio ** 2
  
  def perimetro(self):
    return 2 * PI * self.raio