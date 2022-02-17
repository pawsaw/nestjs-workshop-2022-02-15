import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BookNotFoundException } from './book-not-found.exception';

@Catch(BookNotFoundException)
export class BookNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: BookNotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(HttpStatus.NOT_FOUND).json({
      message: exception.message,
    });
  }
}
