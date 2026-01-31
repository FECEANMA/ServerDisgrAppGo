import { AulasService } from './aulas.service';
export declare class AulasController {
    private readonly aulaService;
    constructor(aulaService: AulasService);
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
