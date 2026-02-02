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

  async findByDocenteAndLevel(docenteId: number, levelId: number) {
    return this.prisma.estudiante.findMany({
      where: {
        docenteId,
        nivelActualId: levelId,
      },
      include: {
        docente: true,
        aula: true,
        nivelActual: true,
      },
    });
  }

  async sumarProgreso(estudianteId: number, levelId: number) {
    const estudiante = await this.findOne(estudianteId);

    // Si el nivel del estudiante coincide con levelId
    if (estudiante.nivelActualId === levelId) {
      let newNivelId = estudiante.nivelActualId;
      let newProgreso = estudiante.progresoGeneral;

      // Reglas de progreso y niveles
      switch (estudiante.nivelActualId) {
        case 1:
          newNivelId = 2;
          newProgreso = 15;
          break;
        case 2:
          newNivelId = 3;
          newProgreso = 35;
          break;
        case 3:
          newProgreso = 100; // no cambia el nivel
          break;
        default:
          // otros niveles no hacen nada
          return estudiante;
      }

      return this.prisma.estudiante.update({
        where: { id: estudianteId },
        data: {
          nivelActualId: newNivelId,
          progresoGeneral: newProgreso,
        },
        include: {
          docente: true,
          aula: true,
          nivelActual: true,
        },
      });
    }

    // Si levelId no coincide con nivelActualId, no se hace nada
    return estudiante;
  }
}
