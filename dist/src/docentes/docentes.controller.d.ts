import { DocentesService } from './docentes.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { LoginDto } from './dto/login.dto';
export declare class DocentesController {
    private readonly docentesService;
    constructor(docentesService: DocentesService);
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
    create(dto: CreateDocenteDto): Promise<{
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
    update(id: number, dto: UpdateDocenteDto): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        imageUrl: string | null;
        createdAt: Date;
        aulaId: number;
    }>;
    login(dto: LoginDto): Promise<{
        id: number;
        nombre: string;
        apellido: string;
        email: string;
        aula: {
            id: number;
            nombre: string;
        };
    }>;
}
