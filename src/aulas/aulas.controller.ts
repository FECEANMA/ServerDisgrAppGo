import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AulasService } from './aulas.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('aulas')
@ApiTags('Aulas')
export class AulasController {
  constructor(private readonly aulaService: AulasService) {}

  @Get()
  findAll() {
    return this.aulaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.aulaService.findOne(id);
  }
}
