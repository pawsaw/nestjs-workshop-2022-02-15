import { Book } from './book';
import { CreatePublisherDto } from './create-publisher.dto';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsInt,
  IsPositive,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto implements Omit<Book, 'publisher'> {
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

  @ValidateNested()
  @Type(() => CreatePublisherDto)
  publisher: CreatePublisherDto;
}
