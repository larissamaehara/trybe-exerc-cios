# Exercício 1
# Dado um array de números de tamanho n, escreva um algoritmo que retorna true se há no array um número duplicado
# e false caso contrário. 
# Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso,
# pior caso e caso médio.

def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False

# O algoritmo ordena o array de números.
# A complexidade do algoritmo é a de ordenação do Python.
# Logo, esse algoritmo tem complexidade O(n log n) para o melhor caso, pior caso e caso médio.
# Dado que, depois de ordenar, no pior caso passamos pelo array inteiro uma vez só, isso seria O(n). Assim sendo,
# a complexidade é O(n*log(n) + n) o que, simplificando, fica O(n log n)

""" A complexidade de tempo para o algoritmo acima é O(n log n):

O método sort(), presente no Python, utiliza como algoritmo de ordenação uma implementação do TimSort, um algoritmo de ordenação com complexidade O(n log n) para o pior caso.

Também percorremos toda nossa entrada em nosso laço for, um indicativo de que realizamos uma operação de complexidade O(n).

Podemos combinar ambas as complexidades através da operação de soma e obter como resultado parcial O(n log n) + O(n). Todavia, o tempo para execução de um algoritmo O(n log n) tende a ser muito maior do que um O(n) para entradas muito grandes, então, por simplificação costumamos descartar a menor complexidade, tendo assim como resultado final O(n log n).

Dica: É importante ressaltar, também, que tal simplificação só se aplica quando estamos somando a complexidade de atividades que ocorrem de forma paralela, ou seja, não se aplicam na multiplicação onde geralmente lidamos com laços aninhados. """