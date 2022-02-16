import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { Book } from './book';
import { books } from './books';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { getBooksAsync } from './getBooksAsync';

@Controller('books')
@ApiTags('books')
export class BooksController {
  @ApiResponse({
    description: 'Returns the complete collection of books',
    status: HttpStatus.OK,
    type: [Book],
  })
  @Get()
  findAll(): Promise<Book[]> {
    return getBooksAsync();
  }

  @ApiResponse({
    description: 'Returns books containing the requested title token',
    status: HttpStatus.OK,
    type: [Book],
  })
  @Get('/byTitle/:title')
  async findByTitle(@Param('title') title: string): Promise<Book[]> {
    const allBooks = await getBooksAsync();
    const filteredBooks = allBooks.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase()),
    );
    const sortedBooks = filteredBooks.sort(
      (a: Book, b: Book) => a.title.length - b.title.length,
    );

    return sortedBooks;

    // return getBooksAsync()
    //   .then((allBooks) => {
    //     return allBooks.filter((book) =>
    //       book.title.toLowerCase().includes(title.toLowerCase()),
    //     );
    //   })
    //   .then((filteredBooks) => {
    //     return filteredBooks.sort(
    //       (a: Book, b: Book) => a.title.length - b.title.length,
    //     );
    //   });
  }
}
