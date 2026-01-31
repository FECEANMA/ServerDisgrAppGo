import { PrismaService } from '../prisma/prisma.service';
export declare class PracticaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getLetraById(id: number): Promise<{
        tipoPractica: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        caracter: string;
        imageUrl: string | null;
        tipoPracticaId: number;
    }>;
    getPalabraById(id: number): Promise<{
        tipoPractica: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        texto: string;
        longitud: number;
        imageUrl: string | null;
        tipoPracticaId: number;
    }>;
    getIdsLetras(): Promise<number[]>;
    getIdsPalabras(): Promise<number[]>;
}
