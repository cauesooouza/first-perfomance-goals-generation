import { RoupaRepository } from "../Repository/RoupaRepository";
import { Roupa } from "../model/roupa";

export class RoupaController implements RoupaRepository {
    private estoqueDeRoupas: Array<Roupa> = new Array<Roupa>();
    private id: number = 0;

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

    atualizarRoupa(idRoupa: number, opcaoAtualizar: string, entradaDeDado: string | number): void {
        let roupaEncotrada = this.encontrarRoupa(idRoupa);

        if (roupaEncotrada) {
            switch (opcaoAtualizar) {
                case 'tipo':
                    roupaEncotrada.tipo = entradaDeDado as string;
                    console.log("Atualizado com sucesso!");
                    break;
                case 'tamanho':
                    roupaEncotrada.tamanho = entradaDeDado as string;
                    console.log("Atualizado com sucesso!");
                    break;
                case 'tecido':
                    roupaEncotrada.tecido_1 = entradaDeDado as string;
                    console.log("Atualizado com sucesso!");
                    break;
                case 'cor':
                    roupaEncotrada.cor = entradaDeDado as string;
                    console.log("Atualizado com sucesso!");
                    break;
                case 'marca':
                    roupaEncotrada.marca = entradaDeDado as string;
                    console.log("Atualizado com sucesso!");
                    break;
                case 'preco':
                    roupaEncotrada.preco = entradaDeDado as number;
                    console.log("Atualizado com sucesso!");
                    break;
                case 'quantidade':
                    roupaEncotrada.quantidade = entradaDeDado as number;
                    console.log("Atualizado com sucesso!");
                    break;
                default:
                    break;
            }
        } else {
            console.log("Roupa não encontrada!");
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