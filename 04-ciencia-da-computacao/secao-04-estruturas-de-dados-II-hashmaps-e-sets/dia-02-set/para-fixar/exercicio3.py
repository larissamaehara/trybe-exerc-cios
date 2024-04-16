# Exercício 3: is_in
# Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador in,
# precisamos que a nossa classe tenha um método chamado __contains__ e é o que faremos agora:

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
  
  def __contains__(self, item):
    return self.conjunto[item]

if __name__ == "__main__":
    conj = Conjunto()
    for i in [1, 2, 3]:
        conj.add(i)
    print(conj)
    print(1 in conj)
    print(0 in conj)
    