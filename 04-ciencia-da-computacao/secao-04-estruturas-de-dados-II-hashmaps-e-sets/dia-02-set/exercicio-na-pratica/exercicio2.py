# Exercício 2 - Substring
# Dada uma string, ache o tamanho da maior substring que não tenha caracteres repetidos.
# Complexidade de tempo limite aceitável: O(n²).

def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest

# Análise de complexidade:
# A função longer_no_repeating_substring_len
# realiza dois fors um dentro do outro, e por isso sua Complexidade de Tempo é O(n²).