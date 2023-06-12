import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';
import { BookDTO } from './book.dto';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() data: Book) {
    return this.booksService.create(data);
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: BookDTO) {
    return this.booksService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
