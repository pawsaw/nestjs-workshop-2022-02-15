import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Book } from './book';
import { books } from './books';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('books')
@ApiTags('books')
export class BooksController {
  @ApiResponse({
    description: 'Returns the complete collection of books',
    status: HttpStatus.OK,
    type: [Book],
  })
  @Get()
  findAll(): Book[] {
    return books;
  }
}
