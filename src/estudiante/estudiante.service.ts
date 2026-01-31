// src/estudiantes/estudiantes.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.estudiante.findMany({
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });
  }

  async findOne(id: number) {
    const estudiante = await this.prisma.estudiante.findUnique({
      where: { id },
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });

    if (!estudiante) {
      throw new NotFoundException('Estudiante no encontrado');
    }

    return estudiante;
  }

  async create(data: CreateEstudianteDto) {
    return this.prisma.estudiante.create({
      data,
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });
  }

  async update(id: number, data: UpdateEstudianteDto) {
    await this.findOne(id); // verifica que exista

    return this.prisma.estudiante.update({
      where: { id },
      data,
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // verifica si existe
    return this.prisma.estudiante.delete({
      where: { id },
    });
  }

  async findByDocenteId(docenteId: number) {
    return this.prisma.estudiante.findMany({
      where: { docenteId },
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });
  }

  async sumarPractica(id: number) {
    // Verifica si el estudiante existe
    const estudiante = await this.findOne(id);

    // Incrementa totalPracticas en 1
    return this.prisma.estudiante.update({
      where: { id },
      data: {
        totalPracticas: estudiante.totalPracticas + 1,
      },
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });
  }
}
