# Exercício 2
# Crie uma interface informal em Python chamada Product, ela deve definir um método abstrato chamado print_price.
# Caso o método print_price não seja implementado, lance uma exceção NotImplementedError.
# Crie também uma subclasse Book, que será o nosso exemplo de Product nesse exercício e
# implemente o método print_price para mostrar o preço do livro na tela.

class Product:
    def __init__(self, price: float) -> None:
      self.price = price

    def print_price(self) -> None:
        raise NotImplementedError(
           "Classes derivadas de Product precisam implementar o método print_price."
        )
    
class Book(Product):
    def __init__(self, price: float) -> None:
      super().__init__(price)

    def print_price(self) -> None:
        print(f"O preço do livro é R$ {self.price:.2f}")

book = Book(10)
book.print_price()
  
