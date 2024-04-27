# Exercício 3

## Código

```
def insertion_sort(array):
    for i in range(1, len(array)):
        current_value = array[i]
        position = i

        while position > 0 and array[position - 1] > current_value:
            array[position] = array[position - 1]
            position -= 1

        array[position] = current_value

    return array


def main():

    array = [23, 423, 1, 54, 8, 980, 45, 768, 34, 55, 88, 99, 100, 234, 567]

    sorted_array = insertion_sort(array)

    print(f"Array ordenado: {sorted_array}")


if __name__ == "__main__":
    main()

```

- Descubra o valor de *current_value* na linha do *while* quando a soma de *i* e position for igual a *6* pela primeira vez.

### Solução

O valor é 54.

A forma mais fácil de descobrir o valor é usando o debugger do VS Code. Para isso, basta colocar um breakpoint condicional na linha do while com a condição i + position == 6 e executar o código em modo de debug. Quando o código parar no breakpoint, basta conferir o valor da variável current_value na janela VARIABLES.
