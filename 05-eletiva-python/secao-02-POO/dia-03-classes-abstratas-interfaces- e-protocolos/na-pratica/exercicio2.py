# Exercício 2
# Agora, você deve criar um sistema para gerenciamento de serviços de entrega.
# Para isso, deverá ter uma interface chamada Deliverable que precisa conter um método chamado delivery.
# Essa interface vai ser implementada pelas classes Mail e ShippingCompany. 
# O método delivery deverá receber como parâmetro um objeto da classe Customer e um objeto da classe Address.
# Além disso, o método precisa imprimir uma mensagem informando que o serviço foi entregue com sucesso.

# ➡️ Siga os passos a seguir para a construção.

# Crie uma classe chamada Customer com os atributos name e phone.
# Crie uma classe chamada Address com os atributos street, number, city e state.
# Crie uma classe chamada Mail que implemente a interface Deliverable.
# Crie uma classe chamada ShippingCompany que implemente a interface Deliverable.
# Crie uma função main que instancie um objeto de cada uma das classes Mail e ShippingCompany. Em seguida, crie um objeto da classe Customer e um objeto da classe Address. Por fim, utilize o método delivery dos objetos Mail e ShippingCompany passando como parâmetro o objeto Customer e o objeto Address.
# Lembre-se de usar o mypy para verificar se a tipagem está correta.

from abc import ABC, abstractmethod


class Customer:
    def __init__(self, name: str, phone: str) -> None:
        self.name = name
        self.phone = phone


class Address:
    def __init__(
        self, street: str, number: int, city: str, state: str
    ) -> None:
        self.street = street
        self.number = number
        self.city = city
        self.state = state


class Deliverable(ABC):
    @abstractmethod
    def delivery(self, customer: Customer, address: Address) -> None:
        pass


class Mail(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(f"O pacote foi entregue com sucesso para o cliente {customer.name}")
        print(
            f"Endereço: {address.street}, {address.number}, "
            f"{address.city}, {address.state}"
        )
        print(f"Telefone: {customer.phone}")


class ShippingCompany(Deliverable):
    def delivery(self, customer: Customer, address: Address) -> None:
        print(f"A carga foi entregue com sucesso para o cliente {customer.name}")
        print(
            f"Endereço: {address.street}, {address.number}, "
            f"{address.city}, {address.state}"
        )
        print(f"Telefone: {customer.phone}")


def main():
    mail = Mail()
    shipping_company = ShippingCompany()

    customer = Customer("Rafa", "99999-9999")
    address = Address("Rua A", 123, "São Paulo", "SP")

    mail.delivery(customer, address)
    shipping_company.entregar(customer, address)


if __name__ == "__main__":
    main()
