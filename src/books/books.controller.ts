import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { Book, ISBN } from './book';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';

@Controller('books')
@ApiTags('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @ApiResponse({
    description: 'Returns the complete collection of books',
    status: HttpStatus.OK,
    type: [Book],
  })
  @Get()
  findAll(): Observable<Book[]> {
    return this.booksService.findAll();
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
  findOne(
    @Param('isbn') isbn: ISBN,
    // @Res() response: Response,
  ): Observable<Book> {
    return this.booksService.findOne(isbn);
  }

  @Post()
  createBook(@Body() createBookDto: CreateBookDto): Observable<Book> {
    return this.booksService.createBook(createBookDto);
  }
}
