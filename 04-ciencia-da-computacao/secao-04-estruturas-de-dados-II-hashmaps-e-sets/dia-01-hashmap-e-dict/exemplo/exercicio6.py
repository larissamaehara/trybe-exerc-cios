# Exercício 6:
# Dada uma string, construa um dicionário com a contagem de cada caractere da palavra.
# Utilize o pseudocódigo e o exemplo abaixo para se nortear.

import string


count_chars = {}

for char in string:
	if char not in count_chars:
		count_chars[char] = 1
	else:
		count_chars[char] += 1

print(count_chars)