import { ApiProperty } from '@nestjs/swagger';

export class Publisher {
  @ApiProperty()
  name: string;
  @ApiProperty()
  url: string;
}

export class Book {
  @ApiProperty()
  title: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty()
  isbn: string;

  @ApiProperty()
  abstract: string;

  @ApiProperty()
  numPages: number;

  @ApiProperty()
  author: string;

  @ApiProperty({
    description: 'The publisher of the book',
  })
  publisher: Publisher;
}
