import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AulasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.aulas.findMany({
      include: {
        docente: true,
        estudiantes: true,
      },
    });
  }

  async findOne(id: number) {
    const aula = await this.prisma.aulas.findUnique({
      where: { id },
      include: {
        docente: true,
        estudiantes: true,
      },
    });

    if (!aula) {
      throw new NotFoundException('Aula no encontrado');
    }

    return aula;
  }
}
