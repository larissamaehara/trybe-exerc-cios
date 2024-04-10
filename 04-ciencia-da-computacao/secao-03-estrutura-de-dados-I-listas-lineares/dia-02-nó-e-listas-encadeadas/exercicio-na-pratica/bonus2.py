# Exercício 2:
# Remover duplicatas de uma DoublyLinkedList, atividade extraída e adaptada do LeetCode.
# Nesta atividade será necessário implementar um algoritmo que receba uma DoublyLinkedList como argumento e
# retorne uma nova lista, sem elementos que possuem mais de uma ocorrência.

class DoublyLinkedList:
    # ...
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def delete_duplicates(linked_list):
    list_with_unique_elements = DoublyLinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if linked_list.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements

""" Em contraste com o exercício anterior, 
aqui não sabemos se nossa lista está ordenada ou não, 
por isso não podemos utilizar a estratégia de reapontar o next de cada node caso seu value seja igual ao próximo.

O método index_of percorre a lista toda, e por isso sua Complexidade de tempo é O(n).

O método delete_duplicates percorre toda a lista e para cada elemento faz uma chamada do método index_of, 
resultando em uma complexidade quadrática O(n^2). """