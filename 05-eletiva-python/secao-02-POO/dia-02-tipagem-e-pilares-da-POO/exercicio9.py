# Exercício 9
# Crie a seguinte estrutura:

# Uma classe Product com os atributos protegidos name e price e os métodos get_description e get_price;
# Uma classe Book que herda de Product e tem os mesmos atributos da superclasse mais o atributo protegido
# author e os métodos get_description e get_price;
# Uma classe DVD que herda de Product e tem os mesmos atributos da superclasse mais o atributo protegido
# direction e os métodos get_description e get_price.

class Product:
    def __init__(self, name: str, price: float) -> None:
        self._name = name
        self._price = price

    def get_description(self) -> None:
        pass

    def get_price(self) -> None:
        pass


class Book(Product):
    def __init__(self, name: str, author: str, price: float) -> None:
        super().__init__(name, price)
        self._author = author

    def get_description(self) -> str:
        return f"{self._name} por {self._author}"

    def get_price(self) -> float:
        return self._price


class DVD(Product):
    def __init__(self, name: str, direction: str, price: float) -> None:
        super().__init__(name, price)
        self._direction = direction

    def get_description(self) -> str:
        return f"{self._name} dirigido por {self._direction}"

    def get_price(self) -> float:
        return self._price
