//src/docentes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { CreateDocenteDto } from './dto/create-docente.dto';

@Injectable()
export class DocentesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.docentes.findMany({
      include: {
        aula: true,
        estudiantes: true,
      },
    });
  }

  async findOne(id: number) {
    const docente = await this.prisma.docentes.findUnique({
      where: { id },
      include: {
        aula: true,
        estudiantes: true,
      },
    });

    if (!docente) {
      throw new NotFoundException('Docente no encontrado');
    }

    return docente;
  }

  async create(data: CreateDocenteDto) {
    return this.prisma.docentes.create({
      data,
      include: {
        aula: true,
      },
    });
  }

  async update(id: number, data: UpdateDocenteDto) {
    await this.findOne(id);

    return this.prisma.docentes.update({
      where: { id },
      data,
    });
  }

  async findByEmail(email: string) {
    return this.prisma.docentes.findUnique({
      where: { email },
      include: { aula: true },
    });
  }
}