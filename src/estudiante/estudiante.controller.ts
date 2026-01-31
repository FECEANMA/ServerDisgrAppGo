// src/estudiantes/estudiantes.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { ApiTags } from '@nestjs/swagger';
import { EstudianteService } from './estudiante.service';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes')
@ApiTags('Estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.findOne(id);
  }

  @Get('docente/:docenteId')
  findByDocente(
    @Param('docenteId', ParseIntPipe) docenteId: number,
  ) {
    return this.estudianteService.findByDocenteId(docenteId);
  }

  @Post()
  create(@Body() dto: CreateEstudianteDto) {
    return this.estudianteService.create(dto);
  }
  
  @Put(':id')
  update(
  @Param('id', ParseIntPipe) id: number,
  @Body() dto: UpdateEstudianteDto) {
    return this.estudianteService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.remove(id);
  }

  @Patch(':id/sumar-practica')
  async sumarPractica(@Param('id', ParseIntPipe) id: number) {
    return this.estudianteService.sumarPractica(id);
  }
}
