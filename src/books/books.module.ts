import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [HttpModule],
  controllers: [BooksController],
  providers: [
    {
      provide: BooksService,
      useFactory: (http: HttpService) => {
        // if (process.env.NODE_ENV === 'TEST') {
        //   return new MockBooksService();
        // }
        return new BooksService(http);
      },
      inject: [HttpService],
    },
  ],
})
export class BooksModule {}
