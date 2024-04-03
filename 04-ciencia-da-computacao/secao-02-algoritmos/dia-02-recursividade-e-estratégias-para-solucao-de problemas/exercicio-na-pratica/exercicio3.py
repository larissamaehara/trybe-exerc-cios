# 🚀 Exercício 3:
# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.

def find_largest_number(list, n):
    if n == 1:
        return list[0]
    else:
        max_list = find_largest_number(list, n-1)
        if max_list > list[n-1]:
            return max_list
        else:
            return list[n-1]

def main(list):
    n = len(list)
    return find_largest_number(list, n)


print(main([1,21,300,4,57]))
