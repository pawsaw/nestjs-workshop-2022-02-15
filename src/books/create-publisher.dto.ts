import { Publisher } from './book';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePublisherDto implements Publisher {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
