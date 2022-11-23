import { Book } from './book.js'
import { Collection } from './collection.js'
import { Product } from './product.js'


// коллекция со специфичной только для продуктов функциональностью
export class ProductCollection<T extends Product> extends Collection<T> {
  get price(): number {
    let totalPrice = 0
    const keys = Object.getOwnPropertyNames(this.items)

    for (const key of keys) {
      const item = this.items[key]
      totalPrice += item.price
    }

    return totalPrice
  }
}

// коллекция книг для удобной работы
// BookCollection в коде выглядит читабельнее чем Collection<Book>
export class BookCollection extends ProductCollection<Book> {
}



// export interface Collection<T> {
//   [key: string]: T
// }
// // полка с литературой по программированию
// export const programmingLiterature: Map<string, Book> = new Map()
// // добавляем элемент в коллекцию
// programmingLiterature.set(
//   'Cracking the coding interview',
//   new Book(
//     'Cracking the coding interview', 'programming', 100,
//     {
//       firstName: 'Gayle',
//       lastName: 'Laakmann',
//       rating: 5
//     }
//   )
// )


// функция "взятия" книги с полки
// по факту это поиск - операция, требующая время
// export function getFromShelf(shelf: Map<string, Book>, bookName: string): Book {
//   // берём элемент из коллекции
//   const book = shelf.get(bookName)
//   // const book = shelf[bookName]
export function getFromMap<K, V>(data: Map<K, V>, key: K): V {
  const value = data.get(key)

  // if (book == null) {
  if (value == null) {
    throw Error(`There is no such book on the shelf.`)
  }

  return value

}
// здесь аргумент называется value
function upperCase(value: string): string {
  return value.toUpperCase()
}
const name = 'Harry Potter'
// а здесь переменная называется name
console.log(upperCase(name))






  // export const books = [
//   new Book('Harry Potter and the Philosopher\'s Stone', 'fantasy', 980),
//   new Book('Lord of the Ring', 'fantasy', 1001),
//   new Book('How to be productive', 'lifestyle', 500),
//   new Book('Game of Thrones', 'fantasy', 999) 
// ]
