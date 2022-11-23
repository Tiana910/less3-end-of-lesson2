import { Author } from './author.js'
import { Book } from './book.js'
// import { addToShelfBunch, buy, BuyCallback, markAsRead, showRating } from './helpers.js'
// import { getFromMap, programmingLiterature } from './book-collection.js'
import { Collection } from './collection.js'
import { BookCollection, ProductCollection } from './book-collection.js'
import { Notepad } from './notepad.js'
import { Ratingable } from './ratingable.js'
import { BookAuthor, Genre } from './types.js'


interface OptionalAuthor extends Partial<Ratingable> {
  // вопросительный знак означает не обязательное свойство как и для аргументов функции
  firstName?: string
  lastName?: string
  birthDate?: Date
  booksWritten?: number
}
// можно описать только то, что нужно
const OptionalAuthor: OptionalAuthor = {
  rating: 5,
  booksWritten: 10
}
// необходимо описать все свойства
const fullAuthor: Required<OptionalAuthor> = {
  firstName: 'J. K.',
  lastName: 'Rowling',
  birthDate: new Date(),
  booksWritten: 15,
  rating: 4.7
}

const authorWithoutRating: Omit<Author, 'rating'> = {
  firstName: 'J. K',
  lastName: 'Rowling',
  birthDate: new Date(),
  booksWritten: 10
  }

// const author: BookAuthor = {
//   firstName: 'J. K',
//   lastName: 'Rowling'
// }

let newAutor:Partial<Author> = {}
// изменить этого автора нельзя
const author: Readonly<Author> = {
  firstName: 'J. K',
  lastName: 'Rowling',
  birthDate: new Date(),
  booksWritten: 10,
  rating: 4.7
  }


const book = new Book('Harry Potter', Genre.Fantasy[1], 100, author)
console.log(book)


const jkRowling: Partial<Author> = { firstName: 'J. K.', lastName: 'Rowling', rating: 4.6 }
const harryPotter = new Book('Harry Potter', Genre.Fantasy[1], 500, author)
const magicCreatures = new Book('Magic Creatures', Genre.Fantasy[1], 340, author)
const unicornNotepad = new Notepad('Unicorn power', 30)

// контекст работы с товарами
const cart = new ProductCollection()
cart.set(harryPotter.name, harryPotter)
cart.set(magicCreatures.name, magicCreatures)
cart.set(unicornNotepad.name, unicornNotepad)

// контекст работы со списками книг
const favoriteBooksShelf = new BookCollection()
favoriteBooksShelf.set(harryPotter.name, harryPotter)
favoriteBooksShelf.set(magicCreatures.name, magicCreatures)

// уточнение типа коллекции
function getSummary(collection: Collection<unknown>): string {
  if (collection instanceof BookCollection) {
    return `Total ${cart.size} books on the shelf.`
  }

  if (collection instanceof ProductCollection) {
    return `Total ${cart.price}р. for ${cart.size} items.`
  }

  return 'No special summary for this kind of collection.'

}

console.log(getSummary(cart))
console.log(getSummary(favoriteBooksShelf))

// const foundBook = getFromMap(programmingLiterature, 'Cracking the coding interview')
// console.log(foundBook);
// // проверим методы и свойства нашей коллекции
// // размерность - 1
// console.log(programmingLiterature.size)
// // элемент есть - true
// console.log(programmingLiterature.has('Cracking the coding interview'))
// // очистим коллекцию
// programmingLiterature.clear()
// // элемента нет, удалять нечего - false
// console.log(programmingLiterature.delete('Cracking the coding interview'))



// new Collection<boolean, Book>()
// new Collection<object, Book>()
// new Collection<Book, Book>()
// new Collection<number, Book>()
// new Collection<string, Book>()
// new Collection<symbol, Book>()

// new Collection<Book, number>()
// new Collection<Book, string>()
// new Collection<Book, symbol>()
// в большинстве случаев можно указывать так:  new Collection<Book>()


// const reviews: [string, number, string][] = [
//   ['John', 5, 'It is my favorite book'],
//   ['Mary', 3, 'I expected more from it :('],
//   ['Clara', 5, 'Read it again and again!']
// ]

// const book = new Book(
//   'Harry Potter',
//   'fantasy', 980,
//   {firstName: 'J. K.', lastName: 'Rowling', rating: 4.6},
//   reviews
// )

// const callback: BuyCallback = (error, transactionId) => {
//   if (error == null && transactionId != null) {
//     console.log('Success!')
//   } else {
//     console.error('Fail', error)
//   }
// }

// buy(book, callback)
