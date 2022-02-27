/*
    Baseado no Array de Livros por Categoria abaixo, faça:
        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do author e devolver os livros desse autor
*/

const booksByCategory = [
    {
        category: "Economia",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

const totalCategories = booksByCategory.length
const economicsBooks = booksByCategory[0].books.length
const emotionalIntellBooks = booksByCategory[1].books.length

console.log(`Quantidade de categorias ${totalCategories}`)
console.log(`Qunatidade de livros da categoria economia ${economicsBooks}`)
console.log(`Qunatidade de livros da categoria inteligência emocional ${emotionalIntellBooks}`)

countAuthors()

function countAuthors() {
    let authors = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log('Total de autores: ', authors.length)
}

function booksOfAuthor(author) {
    let books = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}

booksOfAuthor('Augusto Cury')