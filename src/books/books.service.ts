import { Injectable } from '@nestjs/common';
import { Book, ISBN } from './book';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
  findAll(): Promise<Book[]> {
    throw 'Not implemented yet.';
  }

  async findOne(isbn: ISBN): Promise<Book> {
    throw 'Not implemented yet.';
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    throw 'Not implemented yet.';
  }
}
