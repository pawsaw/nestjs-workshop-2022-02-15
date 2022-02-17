import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Book, ISBN } from './book';
import { BookNotFoundException } from './book-not-found.exception';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
  constructor(private readonly http: HttpService) {}

  findAll(): Observable<Book[]> {
    return this.http
      .get<Book[]>('http://localhost:4730/books')
      .pipe(map((response) => response.data));
  }

  findOne(isbn: ISBN): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`).pipe(
      map((response) => response.data),
      catchError((error) => {
        if (error?.response?.status === 404) {
          throw new BookNotFoundException(
            'The book with the given isbn has not been found',
          );
        } else {
          throw error;
        }
        return of();
      }),
    );
  }

  createBook(createBookDto: CreateBookDto): Observable<Book> {
    return this.http
      .post<Book>(`http://localhost:4730/books`, createBookDto)
      .pipe(map((response) => response.data));
  }
}
