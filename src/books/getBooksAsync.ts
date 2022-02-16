import { Book } from './book';
import { books } from './books';

export function getBooksAsync(): Promise<Book[]> {
  const result = new Promise<Book[]>((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 5000);
  });
  return result;
}
