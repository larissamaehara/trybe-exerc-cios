# Exercício 6
# Com base no exercício anterior, instancie um objeto da classe Rectangle com os valores base = 5 e height = 10 e
# chame os métodos calculate_area e calculate_perimeter.
# Observe como quem usa a classe não precisa entender como o calculo é feito.

from exercicio5 import Rectangle


rectangle = Rectangle(5, 10)
print("Área:", rectangle.calculate_area()) # Área: 50
print("Perímetro:", rectangle.calculate_perimeter()) # Perímetro: 30
