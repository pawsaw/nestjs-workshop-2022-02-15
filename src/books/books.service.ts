import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Book, ISBN } from './book';
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
    return this.http
      .get<Book>(`http://localhost:4730/books/${isbn}`)
      .pipe(map((response) => response.data));
  }

  createBook(createBookDto: CreateBookDto): Observable<Book> {
    return this.http
      .post<Book>(`http://localhost:4730/books`, createBookDto)
      .pipe(map((response) => response.data));
  }
}
