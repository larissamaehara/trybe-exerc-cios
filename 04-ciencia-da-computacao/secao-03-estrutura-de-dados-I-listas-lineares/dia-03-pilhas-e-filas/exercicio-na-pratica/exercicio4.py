# Exercício 4:
# Estenda a classe Stack, que escrevemos durante as explicações do conteúdo,
# para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois,
# ela não poderá ter três itens. Por exemplo:


""" content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha") """

from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(5)
except StackOverflow:
    print('The Stack is full')


# O método push realiza inserção de itens, que na Pilha possui Complexidade de tempo é O(1).
