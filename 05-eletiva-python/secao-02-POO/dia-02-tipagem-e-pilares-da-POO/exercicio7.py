# Exercício 7
# Crie uma classe MonthlyExpense (gastos mensais) que contenha os seguintes atributos:

# internet: público grocery: público power: protegido water: protegido rent: privado

class MonthlyExpense:
    def __init__(self,
        internet: float,
        grocery: float,
        power: float,
        water: float,
        rent: float
    ) -> None:
        self.internet = internet
        self.grocery = grocery
        self._power = power
        self._water = water
        self.__rent = rent
