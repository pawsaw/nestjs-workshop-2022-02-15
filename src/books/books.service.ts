import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, ISBN } from './book';
import { books } from './books';
import { CreateBookDto } from './create-book.dto';
import { getBooksAsync } from './getBooksAsync';

@Injectable()
export class BooksService {
  findAll(): Promise<Book[]> {
    return getBooksAsync();
  }

  async findOne(isbn: ISBN): Promise<Book> {
    const allBooks = await getBooksAsync();
    const book = allBooks.find((book) => book.isbn === isbn);
    if (!book) {
      throw new NotFoundException('Book with requested isbn not found');
    }

    return book;
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const newBook: Book = {
      ...createBookDto,
      publisher: {
        ...createBookDto.publisher,
      },
    };

    books.push(newBook);

    return newBook;
  }
}
