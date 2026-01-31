import { PrismaService } from '../prisma/prisma.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudianteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        docente: {
            id: number;
            nombre: string;
            apellido: string;
            email: string;
            password: string;
            imageUrl: string | null;
            createdAt: Date;
            aulaId: number;
        };
        aula: {
            id: number;
            nombre: string;
        };
        nivelActual: {
            id: number;
            nombre: string;
            descripcion: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    })[]>;
    findOne(id: number): Promise<{
        docente: {
            id: number;
            nombre: string;
            apellido: string;
            email: string;
            password: string;
            imageUrl: string | null;
            createdAt: Date;
            aulaId: number;
        };
        aula: {
            id: number;
            nombre: string;
        };
        nivelActual: {
            id: number;
            nombre: string;
            descripcion: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    }>;
    create(data: CreateEstudianteDto): Promise<{
        docente: {
            id: number;
            nombre: string;
            apellido: string;
            email: string;
            password: string;
            imageUrl: string | null;
            createdAt: Date;
            aulaId: number;
        };
        aula: {
            id: number;
            nombre: string;
        };
        nivelActual: {
            id: number;
            nombre: string;
            descripcion: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    }>;
    update(id: number, data: UpdateEstudianteDto): Promise<{
        docente: {
            id: number;
            nombre: string;
            apellido: string;
            email: string;
            password: string;
            imageUrl: string | null;
            createdAt: Date;
            aulaId: number;
        };
        aula: {
            id: number;
            nombre: string;
        };
        nivelActual: {
            id: number;
            nombre: string;
            descripcion: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    }>;
    findByDocenteId(docenteId: number): Promise<({
        docente: {
            id: number;
            nombre: string;
            apellido: string;
            email: string;
            password: string;
            imageUrl: string | null;
            createdAt: Date;
            aulaId: number;
        };
        aula: {
            id: number;
            nombre: string;
        };
        nivelActual: {
            id: number;
            nombre: string;
            descripcion: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    })[]>;
    sumarPractica(id: number): Promise<{
        docente: {
            id: number;
            nombre: string;
            apellido: string;
            email: string;
            password: string;
            imageUrl: string | null;
            createdAt: Date;
            aulaId: number;
        };
        aula: {
            id: number;
            nombre: string;
        };
        nivelActual: {
            id: number;
            nombre: string;
            descripcion: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        edad: number;
        imageUrl: string | null;
        createdAt: Date;
        docenteId: number;
        aulaId: number;
        progresoGeneral: number;
        totalPracticas: number;
        nivelActualId: number | null;
        observacion: string | null;
    }>;
}
