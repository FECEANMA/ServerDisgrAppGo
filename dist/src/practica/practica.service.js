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
exports.PracticaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PracticaService = class PracticaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLetraById(id) {
        const letra = await this.prisma.letra.findUnique({
            where: { id },
            include: { tipoPractica: true },
        });
        if (!letra) {
            throw new common_1.NotFoundException(`Letra con id ${id} no encontrada`);
        }
        return letra;
    }
    async getPalabraById(id) {
        const palabra = await this.prisma.palabra.findUnique({
            where: { id },
            include: { tipoPractica: true },
        });
        if (!palabra) {
            throw new common_1.NotFoundException(`Palabra con id ${id} no encontrada`);
        }
        return palabra;
    }
    async getIdsLetras() {
        const letras = await this.prisma.letra.findMany({
            select: { id: true },
        });
        return letras.map(l => l.id);
    }
    async getIdsPalabras() {
        const palabras = await this.prisma.palabra.findMany({
            select: { id: true },
        });
        return palabras.map(p => p.id);
    }
};
exports.PracticaService = PracticaService;
exports.PracticaService = PracticaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PracticaService);
//# sourceMappingURL=practica.service.js.map