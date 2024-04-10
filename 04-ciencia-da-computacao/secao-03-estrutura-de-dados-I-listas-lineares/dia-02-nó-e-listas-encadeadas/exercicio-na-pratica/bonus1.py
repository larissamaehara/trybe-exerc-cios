# Exercício 1:
# Dada uma LinkedList ordenada, crie uma função que recebe essa LinkedList como argumento e
# remove os elementos repetidos, mantendo a ordenação da lista.
# Essa função deve respeitar a complexidade O(n) e retornar a lista ao final.

""" Dica: Essa questão costuma aparecer em processos seletivos. 
Não é a toa que ela está disponível em plataformas de prática de algoritmos como por exemplo LeetCode, 
que utilizamos como fonte para esse exercício.
 """
def delete_duplicates(linked_list):
        if len(linked_list) <= 1:
            return linked_list

        current_element = linked_list.head_value

        while current_element and current_element.next:
            if current_element.value == current_element.next.value:
                current_element.next = current_element.next.next
            else:
                current_element = current_element.next
        return linked_list

# Como iteramos pela lista apenas uma vez, conseguimos respeitar a complexidade O(n).