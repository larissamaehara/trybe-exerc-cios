# 🚀 Exercício 1 - Blefe
# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. 
# Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:

# A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.

# nota da partida
def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas, adivinhas):
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def quem_ganhou_blefe(jogadas):
    jogadores = list(jogadas.keys())

    primeira_nota = nota_individual(
        jogadas[jogadores[0]], jogadas[jogadores[1]]
    )

    segunda_nota = nota_individual(
        jogadas[jogadores[1]], jogadas[jogadores[0]]
    )

    if primeira_nota > segunda_nota:
        return jogadores[0]
    elif primeira_nota < segunda_nota:
        return jogadores[1]
    else:
        return None


quem_ganhou = quem_ganhou_blefe(entrada)

if quem_ganhou:
    print(f"Quem ganhou: {quem_ganhou} ")
else:
    print("Deu empate")

# Análise de complexidade:
# A função nota_partida utiliza o método .difference do set que por sua vez possui Complexidade de Tempo O(len(s)),
# ou em outras palavras, a complexidade de tempo será a quantidade de elementos que está em s.

# A função nota_redutor é igual à nota_partida. A diferença é que retorna o valor mínimo.

# A função nota_individual cria duas sets, e como precisa percorrer as listas para criar os conjuntos,
# sua Complexidade de Tempo é O(len(s) + len(t)).

# A função quem_ganhou_blefe possui a variável jogadores que recebe uma lista com Complexidade de Tempo O(n),
# e as variáveis primeira_nota e segunda_nota que recebem o método nota_individual que possui Complexidade de Tempo é O(len(s) + len(t)), que prevalece.
