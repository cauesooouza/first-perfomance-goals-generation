import { Roupa } from "../model/roupa";

export interface RoupaRepository {
    encontrarRoupa(idRoupa: number): Roupa | null;
    listarTodosAsRoupas(): void;
    listarRoupaPorId(idRoupa: number): void;
    registrarRoupa(roupa: Roupa): void;
    atualizarRoupa(idRoupa: number, opcaoAtualizar: number, entradaDeDado: string): void;
    removerRoupaDoRegistro(idRoupa: number): void;
    gerarId(): number;
}