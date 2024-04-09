# Exercício 3

# Imagine que você esteja trabalhando em um e-commerce,
# e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa.
# Verifique quantos produtos formam boas combinações, ou seja,
# quando um produto é igual ao outro e seu índice é maior que o anterior.
# Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

def good_pairs(numbers):
    answer = 0
    i = 0
    size = len(numbers)
    for i in range(size):
        for j in range(i + 1, size):
            if numbers[i] == numbers[j]:
                answer += 1
    return answer

# O algoritmo realiza um for dentro de outro for, portanto possui Complexidade de Tempo O(n^2).