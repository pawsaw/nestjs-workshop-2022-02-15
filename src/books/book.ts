export interface Publisher {
  name: string;
  url: string;
}

export interface Book {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: Publisher;
}
