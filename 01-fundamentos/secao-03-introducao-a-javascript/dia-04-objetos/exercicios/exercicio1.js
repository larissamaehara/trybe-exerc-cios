const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
        {
            title: 'O Senhor dos Anéis - a Sociedade do Anel',
            author: 'J. R. R. Tolkien',
            publisher: 'Martins Fontes',
        },
    ],
};
//item 1:
let message = `O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}".`

console.log(message);

//item 2:
reader.favoriteBooks.push({
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
})

console.log(reader);

//item 3:
let message2 = `Julia tem ${reader.favoriteBooks.length} livros favoritos.`

console.log(message2);

// Nessa solução, temos duas saídas. Se o número de livros favoritos for maior que 1, escreve "livros favoritos", no plural. Se não for maior que 1, escreve no singular: "livro favorito".
const numFavoriteBooks = reader.favoriteBooks.length;

numFavoriteBooks > 1 
  ? console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`) 
  : console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);