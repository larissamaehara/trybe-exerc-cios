# Exercício 1 - Google

# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa.
# Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados,
# além dela própria.
# Isso significa que uma pessoa que não tem nenhuma equipe tem score 1.
# Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

# Escreva um método que calcule o score de uma determinada pessoa.

# 👀 De olho na dica: para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela,
# correto? Qual estratégia utiliza a mesma função dentro dela própria?

def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score

if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    print(score(subordinates, 1))
    print(score(subordinates, 2))
    print(score(subordinates, 3))
    print(score(subordinates, 4))
    print(score(subordinates, 5))
    print(score(subordinates, 6))
    print(score(subordinates, 7))

    # Resposta da análise de complexidade:
    # O método score recebe os parâmetros subordinates e person, 
    # e faz uma iteração sobre subordinates, portanto sua Complexidade de Tempo é O(n).


# follow-up 1:

# Caso a empresa precise fazer essa consulta frequentemente,
# como você pode tornar essas consultas mais eficientes?
# Como você pode guardar o resultado de consultas anteriores?

class Hierarchy:
    def __init__(self, subordinates):
        self.subordinates = subordinates
        self.scores = {}

    def get_score(self, person):
        if person in self.scores:
            print("Já calculei esse score antes")
            return self.scores[person]

        this_score = 1

        for subordinate in self.subordinates[person]:
            this_score += self.get_score(subordinate)
        self.scores[person] = this_score

        return this_score

if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }

    hierarchy = Hierarchy(subordinates)

    print(hierarchy.get_score(1))
    print(hierarchy.get_score(2))
    print(hierarchy.get_score(3))
    print(hierarchy.get_score(4))
    print(hierarchy.get_score(5))
    print(hierarchy.get_score(6))
    print(hierarchy.get_score(7))

    # Resposta da análise de complexidade:
    # O método get_score faz uma iteração sobre o parâmetro subordinates, portanto possui Complexidade de Tempo O(n).

# follow-up 2:
# Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa.
# Seu método deve considerar que cada pessoa pode ter no máximo k pessoas em seu time.
# Se o time estiver cheio, a nova contratada pode ser alocada na equipe de qualquer pessoa abaixo dela,
# não precisando ser na equipe imediatamente abaixo.

class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def add_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.add_person(self.subordinates[boss][0], person)

    def get_score(self, person):
        return self.scores[person]


if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.add_person(None, 1)
    hierarchy.add_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.add_person(2, 4)
    hierarchy.add_person(4, 5)
    hierarchy.add_person(4, 6)
    hierarchy.add_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}")

    hierarchy.add_person(4, 8)
    hierarchy.add_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinates: {hierarchy.subordinates}\n")

    # Resposta da análise de complexidade:
    # O método add_person recebe os parâmetros boss e person e realiza uma operação de inserção.
    # Em hashmaps, as operações de inserção possui Complexidade de Tempo O(1).


# follow-up 3:
# Se você adicionar uma nova contratação à lista de subordinadas,
# a estrutura que você fez anteriormente está desatualizada.
# Modifique suas funções para que essa estrutura seja atualizada junto com a adição de uma nova contratação.
# Faça isso sem rodar de novo a função get_score e lembre-se de atualizar todos os scores desde a pessoa
# da presidência até a equipe que a nova contratação entrou.

class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def fit_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.fit_person(self.subordinates[boss][0], person)

        # Atualiza os scores de todos os superiores da nova pessoa
        current_boss = boss
        while current_boss:
            self.scores[current_boss] += 1
            current_boss = self.find_new_boss(current_boss, person)

    def find_new_boss(self, current_boss, person):
        if len(self.subordinates[current_boss]) < self.k:
            return current_boss
        else:
            return self.find_new_boss(self.subordinates[current_boss][0], person)

if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.fit_person(None, 1)
    hierarchy.fit_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.fit_person(2, 4)
    hierarchy.fit_person(4, 5)
    hierarchy.fit_person(4, 6)
    hierarchy.fit_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinados: {hierarchy.subordinates}")
    print(f"Scores: {hierarchy.scores}")

    hierarchy.fit_person(4, 8)
    hierarchy.fit_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinados: {hierarchy.subordinates}")
    print(f"Scores: {hierarchy.scores}")

    # Resposta da análise de complexidade:
    # O método fit_person recebe os parâmetros boss e person e utiliza uma estrutura de repetição while.
    # O método find_new_boss é recursivo e percorre a árvore recursiva em busca de um chefe adequado.
    # Em resumo, a complexidade de tempo geral do código depende principalmente do número de pessoas na hierarquia,
    # logo, sua Complexidade de Tempo é O(n).