import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { EstudianteService } from './estudiante.service';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
export declare class EstudianteController {
    private readonly estudianteService;
    constructor(estudianteService: EstudianteService);
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
    findByDocente(docenteId: number): Promise<({
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
    create(dto: CreateEstudianteDto): Promise<{
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
    update(id: number, dto: UpdateEstudianteDto): Promise<{
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
