import { PrismaService } from 'src/prisma/prisma.service';
export declare class AulasService {
    private prisma;
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
        }[];
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
    } & {
        id: number;
        nombre: string;
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
        }[];
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
    } & {
        id: number;
        nombre: string;
    }>;
}
