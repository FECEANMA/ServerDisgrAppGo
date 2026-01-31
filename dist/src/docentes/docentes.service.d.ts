import { PrismaService } from '../prisma/prisma.service';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { CreateDocenteDto } from './dto/create-docente.dto';
export declare class DocentesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        estudiantes: {
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
        }[];
        aula: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        imageUrl: string | null;
        createdAt: Date;
        aulaId: number;
    })[]>;
    findOne(id: number): Promise<{
        estudiantes: {
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
        }[];
        aula: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        imageUrl: string | null;
        createdAt: Date;
        aulaId: number;
    }>;
    create(data: CreateDocenteDto): Promise<{
        aula: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        imageUrl: string | null;
        createdAt: Date;
        aulaId: number;
    }>;
    update(id: number, data: UpdateDocenteDto): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        imageUrl: string | null;
        createdAt: Date;
        aulaId: number;
    }>;
    findByEmail(email: string): Promise<{
        aula: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        imageUrl: string | null;
        createdAt: Date;
        aulaId: number;
    }>;
}
