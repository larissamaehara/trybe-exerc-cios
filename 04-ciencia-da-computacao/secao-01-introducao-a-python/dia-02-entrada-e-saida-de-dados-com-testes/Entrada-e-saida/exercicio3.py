# Exercício 3:
# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

# 1- lê todas essas informações;
# 2- aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3- escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

recovery_students = []
with open("file.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recu_students.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recu_students_file:
    print(recuStudents)
    recu_students_file.writelines(recuStudents)