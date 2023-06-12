import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() data: Book) {
    return this.booksService.create(data);
  }
}
