import { RoupaRepository } from "../Repository/RoupaRepository";
import { Roupa } from "../model/roupa";

export class RoupaController implements RoupaRepository {
    private estoqueDeRoupas: Array<Roupa> = new Array<Roupa>();
    private id: number;

    listarTodosAsRoupas(): void {
        if (this.estoqueDeRoupas.length > 0) {
            for (let roupa of this.estoqueDeRoupas) {
                roupa.exibirDetalhes()
            }
        } else {
            console.log("Não há roupas no estoque!")
        }
    }

    encontrarRoupa(idRoupa: number): Roupa | null {
        for (let roupa of this.estoqueDeRoupas) {
            if (roupa.id === idRoupa) {
                return roupa
            }
        }
        return null;
    }

    listarRoupaPorId(idRoupa: number): void {
        let roupaEncontrada = this.encontrarRoupa(idRoupa);
        if (roupaEncontrada != null) {
            roupaEncontrada.exibirDetalhes();
        } else {
            console.log('Roupa não encontrada')
        }
    }

    registrarRoupa(roupa: Roupa): void {
        this.estoqueDeRoupas.push(roupa);
        console.log("Roupa registrada com sucesso!");
    }

    atualizarRoupa(idRoupa: number, opcaoAtualizar: number, entradaDeDado: string | number): void {
        let roupaEncotrada = this.encontrarRoupa(idRoupa);

        if (roupaEncotrada) {
            try {
                roupaEncotrada[`_${opcaoAtualizar}`] = entradaDeDado;
            } catch (error) {
                console.error(error);
            }
        }
    }

    removerRoupaDoRegistro(idRoupa: number): void {
        let roupaRemover = this.estoqueDeRoupas.findIndex(roupa => roupa.id === idRoupa);

        if (roupaRemover != -1) {
            this.estoqueDeRoupas.splice(roupaRemover, 1);
            console.log("Roupa removida do estoque!");
        } else {
            console.log("Roupa não encontrada");
        }
    }
    gerarId(): number {
        return ++this.id;
    }
}