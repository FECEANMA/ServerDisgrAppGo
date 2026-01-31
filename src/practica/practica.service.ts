import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class PracticaService {
  constructor(private readonly prisma: PrismaService) {}

  // Obtener letra por ID
  async getLetraById(id: number) {
    const letra = await this.prisma.letra.findUnique({
      where: { id },
      include: { tipoPractica: true }, // opcional, si quieres info del tipo
    });

    if (!letra) {
      throw new NotFoundException(`Letra con id ${id} no encontrada`);
    }

    return letra;
  }

  // Obtener palabra por ID
  async getPalabraById(id: number) {
    const palabra = await this.prisma.palabra.findUnique({
      where: { id },
      include: { tipoPractica: true }, // opcional
    });

    if (!palabra) {
      throw new NotFoundException(`Palabra con id ${id} no encontrada`);
    }

    return palabra;
  }

  // 🔹 Obtener IDs de letras
  async getIdsLetras() {
    const letras = await this.prisma.letra.findMany({
      select: { id: true },
    });

    return letras.map(l => l.id);
  }

  // 🔹 Obtener IDs de palabras
  async getIdsPalabras() {
    const palabras = await this.prisma.palabra.findMany({
      select: { id: true },
    });

    return palabras.map(p => p.id);
  }
}
