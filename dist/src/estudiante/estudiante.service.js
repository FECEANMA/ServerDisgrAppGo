"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EstudianteService = class EstudianteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.estudiante.findMany({
            include: {
                docente: true,
                aula: true,
                nivelActual: true,
            },
        });
    }
    async findOne(id) {
        const estudiante = await this.prisma.estudiante.findUnique({
            where: { id },
            include: {
                docente: true,
                aula: true,
                nivelActual: true,
            },
        });
        if (!estudiante) {
            throw new common_1.NotFoundException('Estudiante no encontrado');
        }
        return estudiante;
    }
    async create(data) {
        return this.prisma.estudiante.create({
            data,
            include: {
                docente: true,
                aula: true,
                nivelActual: true,
            },
        });
    }
    async update(id, data) {
        await this.findOne(id);
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
    async remove(id) {
        await this.findOne(id);
        return this.prisma.estudiante.delete({
            where: { id },
        });
    }
    async findByDocenteId(docenteId) {
        return this.prisma.estudiante.findMany({
            where: { docenteId },
            include: {
                docente: true,
                aula: true,
                nivelActual: true,
            },
        });
    }
    async sumarPractica(id) {
        const estudiante = await this.findOne(id);
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
};
exports.EstudianteService = EstudianteService;
exports.EstudianteService = EstudianteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EstudianteService);
//# sourceMappingURL=estudiante.service.js.map