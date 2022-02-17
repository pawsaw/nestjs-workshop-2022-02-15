import { ApiProperty } from '@nestjs/swagger';

export type ISBN = string;

export class Book {
  @ApiProperty()
  id: ISBN;

  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  isbn: ISBN;

  @ApiProperty()
  abstract: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  numPages: number;

  @ApiProperty()
  cover: string;

  @ApiProperty()
  userId: number;
}
