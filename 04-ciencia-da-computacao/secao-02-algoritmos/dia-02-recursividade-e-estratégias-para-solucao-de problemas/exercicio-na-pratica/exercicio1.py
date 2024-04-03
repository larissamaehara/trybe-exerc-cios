# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def count_even_numbers(n):
    count_even = 0
    for i in range(n+1):
        if i % 2 == 0 and i != 0:
            count_even += 1
    return count_even
