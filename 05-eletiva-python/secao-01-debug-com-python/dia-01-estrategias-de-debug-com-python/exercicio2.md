# Exercício 2

## Código

```
from math import factorial

def map_factorial(numbers):
    result = []

    for num in numbers:
        result.append(factorial(num))

    return result


def main():
    input_list = [1, 2, 3, 4, 5]
    return map_factorial(input_list)


if __name__ == "__main__":
    main()
```

- Execute o código acima em modo de debug com um _breakpoint_ logo após a definição de **_input_list_**

- Faça a edição da variável na janela VARIABLES para incluir o valor desejado (inteiro negativo e depois string), quando o código parar no brealpoint

- Continue a execução do debugger (atalho F5).

1.Se um dos elementos da **_input_list_** for um **inteiro negativo**, a exceção levantada é ValueError: factorial() not defined for negative values.

2.Se um dos elementos da **_input_list_** for uma string, a exceção levantada é TypeError: 'str' object cannot be interpreted as an integer.
