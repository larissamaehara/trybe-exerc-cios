# Exercício 1: a) Se ainda não implementou, implemente a classe que acabamos de construir, seguindo o passo a passo anterior!

# Exercício 1: b) Use a entrada abaixo para criar objetos Employee:

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

# Exercício 1: c) Instancie a sua classe HashMap e use os objetos Employee para povoá-la. Imprima na tela o nome da pessoa de id_num = 23, acessando a informação a partir da HashMap.

class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10
    
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee
    
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name
    
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

if __name__ == '__main__':
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    hashmap = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        hashmap.insert(employee)

    print(hashmap.get_value(23))

