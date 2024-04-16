# Exercício 1: Inicializando a classe e adicionando elementos

# Crie uma classe chamada Conjunto;

# Escreva um construtor que defina uma lista do tamanho necessário.
# Inicialize todos os valores com False, uma vez que ainda não temos valores adicionados;

# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;

# Na main (dentro de: if __name__ == "__main__":), instancie um objeto do tipo Conjunto e adicione os valores.

class Conjunto:
  def __init__(self):
    self.conjunto = [False] * 1001
    self.last_element = 0

  def add(self, item):
    if not self.conjunto[item]:
      self.conjunto[item] = True
    if item > self.last_element:
      self.last_element = item

if __name__ == "__main__":
  conjunto = Conjunto()
  

  for i in [0, 10, 100, 1000]:
    conjunto.add(i)
