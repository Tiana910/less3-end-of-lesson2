import { Author } from "./author"

export type Review = [string, number, string]
export type BookAuthor = Pick<Author, 'firstName' | 'lastName'>

export enum Genre {
  Fantasy = 1 ,
  Adventure,
  Horror
}
