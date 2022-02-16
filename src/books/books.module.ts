import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { MockBooksService } from './mock-books.service';

@Module({
  controllers: [BooksController],
  providers: [
    {
      provide: BooksService,
      useFactory: () => {
        if (process.env.NODE_ENV === 'TEST') {
          return new MockBooksService();
        }
        return new BooksService();
      },
    },
  ],
})
export class BooksModule {}
