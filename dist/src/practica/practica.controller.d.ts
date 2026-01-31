import { PracticaService } from './practica.service';
export declare class PracticaController {
    private readonly practicaService;
    constructor(practicaService: PracticaService);
    getLetra(id: number): Promise<{
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
    getPalabra(id: number): Promise<{
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
