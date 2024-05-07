# Exercício 1
# Você trabalha em uma empresa que desenvolve sistemas de gestão para empresas de diversos segmentos
# Então, o seu gerente de projetos pediu a você que desenvolvesse uma classe abstrata chamada Employee 
# que servirá de base para as classes Developer, Analyst e Manager.
# Nessa classe abstrata deverá conter um método abstrato chamado calculate_bonus a ser implementado nas classes filhas.
# Então, o método calculate_bonus deverá retornar o valor do salário do funcionário acrescido de um bônus,
# que precisa ser calculado da seguinte forma:

# Para o Developer o bônus será de 20% do salário;
# Para o Analyst o bônus será de 30% do salário;
# Para o Manager o bônus será de 40% do salário;
# Para as demais funções o bônus será de 10% do salário.
# Crie uma função main que instancie um objeto de cada uma das classes filhas. Além disso, ele devem imprimir o valor do salário e da bonificação de cada um deles.

# Formate a saída dos valores numéricos para que sejam impressos com duas casas decimais.

from abc import ABC, abstractmethod


class Employee(ABC):
    def __init__(self, name: str, salary: float) -> None:
        self.name = name
        self.salary = salary

    @abstractmethod
    def calculate_bonus(self) -> str:
        pass


class Developer(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do programador {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.2)}")


class Analyst(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do analista {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.3)}")


class Manager(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do gerente {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.4)}")


class Worker(Employee):
    def calculate_bonus(self) -> str:
        return (f"O salário do colaborador {self.name} mais a "
                f"bonificação é de R${'{:.2f}'.format(self.salary * 1.1)}")



def main():
    developer = Developer("Rafa", 1500)
    print(developer.calculate_bonus())

    analyst = Analyst("Maria", 1600)
    print(analyst.calculate_bonus())

    manager = Manager("José", 1800)
    print(manager.calculate_bonus())

    worker = Worker("Isabel", 1200)
    print(worker.calculate_bonus())


if __name__ == "__main__":
    main()
