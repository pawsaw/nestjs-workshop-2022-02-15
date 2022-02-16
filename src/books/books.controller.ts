import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { Book, ISBN } from './book';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { getBooksAsync } from './getBooksAsync';
import { CreateBookDto } from './create-book.dto';
import { books } from './books';

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

  @ApiResponse({
    description: 'Returns a book with the requested isbn',
    status: HttpStatus.OK,
    type: Book,
  })
  @ApiResponse({
    description: 'The book with the requested isbn does not exist',
    status: HttpStatus.NOT_FOUND,
  })
  @Get(':isbn')
  async findOne(
    @Param('isbn') isbn: ISBN,
    // @Res() response: Response,
  ): Promise<Book> {
    const allBooks = await getBooksAsync();
    const book = allBooks.find((book) => book.isbn === isbn);
    if (!book) {
      throw new NotFoundException('Book with requested isbn not found');
      //   response
      //     .status(HttpStatus.NOT_FOUND)
      //     .send('Book with requested isbn not found');
    }

    // response.status(HttpStatus.OK).json(book);

    return book;
  }

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
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
