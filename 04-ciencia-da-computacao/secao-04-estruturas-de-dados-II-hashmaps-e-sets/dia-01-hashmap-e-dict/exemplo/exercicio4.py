# Exercício 4: Como as diferentes implementações afetam a performance? 
# Quais são os prós e contras da implementação de cada linguagem?

# Solução

# A solução do Python determina o próximo índice a ser visitado de maneira relativamente randômica e
# resulta em uma complexidade assintótica de tempo de O(1). 
# Por outro lado, para evitar que o vetor buckets fique rapidamente sem espaço,
# um Dict é inicializado com uma lista de tamanho 2**15 ints. 
# Como em Python cada int ocupa 24 bytes, no mínimo, o uso de memória é considerável.

# Em Java, o tamanho inicial é menor, uma vez que o que tende a crescer são as chains de cada bucket
# e não a lista de buckets.
# Por outro lado, temos o trade-off com o custo de tempo.
# Para cada consulta, o tempo de busca é proporcional à quantidade de itens naquele bucket que, sendo uma árvore,
# chega a O(log n), sendo n a quantidade de itens naquele bucket.

## Resumindo:
# Python tem complexidade mais baixa, mas gasta muito espaço.
# Java utiliza bem melhor a memória, porém tem maior complexidade para consultas.