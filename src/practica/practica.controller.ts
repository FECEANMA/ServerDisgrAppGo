import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('practica')
@ApiTags('Practicas')
export class PracticaController {
  constructor(private readonly practicaService: PracticaService) {}

  @Get('letra/:id')
  getLetra(@Param('id', ParseIntPipe) id: number) {
    return this.practicaService.getLetraById(id);
  }

  @Get('palabra/:id')
  getPalabra(@Param('id', ParseIntPipe) id: number) {
    return this.practicaService.getPalabraById(id);
  }

  @Get('letras/ids')
  getIdsLetras() {
    return this.practicaService.getIdsLetras();
  }

  @Get('palabras/ids')
  getIdsPalabras() {
    return this.practicaService.getIdsPalabras();
  }
}
