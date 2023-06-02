const school = {
    lessons: [
        {
            course: 'Python',
            students: 20,
            professor: 'Carlos Patrício',
            shift: 'Manhã',
        },
        {
            course: 'Kotlin',
            students: 10,
            professor: 'Gabriel Oliva',
            shift: 'Noite',
        },
        {
            course: 'JavaScript',
            students: 738,
            professor: 'Gustavo Caetano',
            shift: 'Tarde',
        },
        {
            course: 'MongoDB',
            students: 50,
            shift: 'Noite',
        },
    ]
};
console.table(school.lessons);

//item 1: função que obtenha o valor da chave de acordo com sua posição no array.
const valueByNumber = (object, index) => Object.values(object)[index];
console.log(valueByNumber(school, 0));

//item 2: função que retorne a soma do número total de estudantes em todos os cursos.
const numberOfStudents = (object) => {
    // Declara uma variável para contador
    let count = 0;

    // Itera o array e incrementa em count o total de estudantes em cada curso
    for (let index = 0; index < object.lessons.length; index += 1) {
        count += object.lessons[index].students;
    }

    // Retorna o total de estudantes
    return count;
}

console.log(numberOfStudents(school));

//item 3: função que verifica se uma determinada chave existe em todos os elementos do array lessons. 
// O retorno deve ser um booleano (true ou false).
// Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
const verifyProperty = (object, key) => {
    for (let index = 0; index < object.lessons.length; index += 1) {
        if (object.lessons[index][key] === undefined) {
            return false;
        }
    }
    return true;
}

console.log(verifyProperty(school, 'professor')); // false

//item 4: função para alterar o turno para noite no curso de Python. 
// Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
const changeKey = (object, course, value) => {
    // Encontra o elemento que o course é igual a Python
    let findCourse;
    for (let index = 0; index < object.lessons.length; index += 1) {
        let element = object.lessons[index];
        if (element.course === course) {
            findCourse = element;
            break;
        }
    }

    // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
    if (findCourse !== undefined) {
        findCourse.shift = value;
        return findCourse;
    } else {
        return 'Curso não encontrado.';
    }
};

console.log(changeKey(school, 'Python', 'Noite'));
