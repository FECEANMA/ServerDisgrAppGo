//src/docentes.controller.ts
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('docentes')
@ApiTags('Docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) {}

  @Get()
  findAll() {
    return this.docentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.docentesService.findOne(id);
  }
  
  @Post()
  create(@Body() dto: CreateDocenteDto) {
    return this.docentesService.create(dto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDocenteDto,
  ) {
    return this.docentesService.update(id, dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const docente = await this.docentesService.findByEmail(dto.email);
    if (!docente || docente.password !== dto.password) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    return {
      id: docente.id,
      nombre: docente.nombre,
      apellido: docente.apellido,
      email: docente.email,
      aula: docente.aula,
    };
  }
}
