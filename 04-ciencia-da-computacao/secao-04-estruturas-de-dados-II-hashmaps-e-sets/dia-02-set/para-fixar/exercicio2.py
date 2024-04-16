# Exercício 2: Imprimir
# Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar.
# O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos.
# Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado __str__ e
# é o que faremos agora:

class Conjunto:
  def __init__(self):
    self.conjunto = [False] * 1001
    self.last_element = 0

  def add(self, item):
    if not self.conjunto[item]:
      self.conjunto[item] = True
    if item > self.last_element:
      self.last_element = item
  
  def __str__(self):
    string = '{'

    for index, is_in_set in enumerate(self.set):
          if is_in_set:
              string += str(index)
              if index < self.last_element:
                 string += ", "

    string += "}"
    return string

if __name__ == "__main__":
  conjunto = Conjunto()
  for i in [0, 10, 100, 1000]:
    conjunto.add(i)
    
  print(conjunto)

  conjunto2 = Conjunto()
  for i in [1, 2, 3]:
      conjunto2.add(i)
  print(conjunto2)

  conjunto3 = Conjunto()
  for i in [7, 2, 10]:
      conjunto3.add(i)
  print(conjunto3)

  conjunto4 = Conjunto()
  print(conjunto4)