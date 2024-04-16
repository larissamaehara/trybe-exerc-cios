# Exercício 4: União
# União: Todos os elementos que estão em A OU em B

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
  
  def union(self, conjunto_b):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjunto_b.set[index]:
                new_conjunto.add(index)

        return new_conjunto

if __name__ == "__main__":
    conj1 = Conjunto()
    for i in range(1, 11):
        conj1.add(i)

    conj2 = Conjunto()
    for i in range(10, 21):
        conj2.add(i)

    conj3 = conj1.union(conj2)
    print(conj3)