import { Controller, Get } from '@nestjs/common';
import { Book } from './book';
import { books } from './books';

@Controller('books')
export class BooksController {
  @Get()
  findAll(): Book[] {
    return books;
  }
}
