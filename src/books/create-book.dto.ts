import { Book } from './book';
import { IsString, IsNotEmpty, IsInt, IsPositive, Min } from 'class-validator';

export class CreateBookDto implements Book {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  userId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  abstract: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Min(5)
  numPages: number;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;
}
