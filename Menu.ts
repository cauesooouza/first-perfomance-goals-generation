import { RoupaUnisex } from './model/RoupaUnisex';
import { RoupaController } from './Controller/RoupaController';
import readline from 'readline-sync';

const estoqueDeRoupas: RoupaController = new RoupaController();

const esperaInputDoUsuario = () => {
    console.log('Pressione alguma tecla para voltar ao menu');
    let input = readline.prompt();

    Menu();
}

const Menu = () => {
    console.log(`
    ______               _                 _              _   
    | ___ \             | |               | |            | |  
    | |_/ /_ __ ___  ___| |__   ___    ___| |_ ___  _   _| |_ 
    | ___ \ '__/ _ \/ __| '_ \ / _ \  / __| __/ _ \| | | | __|
    | |_/ / | |  __/ (__| | | | (_) | \__ \ || (_) | |_| | |_ 
    \____/|_|  \___|\___|_| |_|\___/  |___/\__\___/ \__,_|\__|
     
    
                1 - Registrar roupa
                2 - Listar todas as roupas
                3 - Buscar roupa por id
                4 - Atualizar dados da roupa
                5 - Remover roupa do estoque
                6 - Sair
    `)

    let opcao: number = readline.questionInt("Digite a opcao desejada: ");

    switch (opcao) {
        case 1:
            let tipo = readline.question("Qual o tipo da roupa? ");
            let tamanho = readline.question("Qual tamanho? ");
            let tecido = readline.question("Qual tipo de tecido desta roupa? ");
            let cor = readline.question("Qual a cor da roupa? ");
            let marca = readline.question("Qual a marca? ");
            let preco = readline.questionFloat("Qual sera o preco? ");
            let quantidade = readline.questionInt("Qual a quantidade desta roupa? ");

            estoqueDeRoupas.registrarRoupa(new RoupaUnisex(estoqueDeRoupas.gerarId(), tipo, tamanho, tecido, cor, marca, preco, quantidade));
            esperaInputDoUsuario();
            break;
        case 2:

            estoqueDeRoupas.listarTodosAsRoupas();
            esperaInputDoUsuario();
            break;
        case 3:
            let idRoupa = readline.questionInt("Qual o id da roupa que deseja encontrar? ");
            estoqueDeRoupas.listarRoupaPorId(idRoupa);
            esperaInputDoUsuario();
            break;
        case 4:
            let idRoupaAtualizar = readline.questionInt("Qual o id da roupa que deseja atualizar? ");
            try {
                if (!estoqueDeRoupas.encontrarRoupa(idRoupaAtualizar)) {
                    throw new Error("Roupa não encontrada no estoque!")
                }
            } catch (err) {
                console.error(`${err}`)
                esperaInputDoUsuario();
                break;
            }
            let opcaoAtualizar = readline.question("O que deseja atualizar (tipo/tamanho/tecido/cor/marca/preco/quantidade) ? ");
            if (opcaoAtualizar == 'preco') {
                let preco = readline.questionFloat("Digite o novo preco: ");
                estoqueDeRoupas.atualizarRoupa(idRoupaAtualizar, opcaoAtualizar, preco)
            } else if (opcaoAtualizar == 'quantidade') {
                let qtdd = readline.questionInt("Digite a nova quantidade: ");
                estoqueDeRoupas.atualizarRoupa(idRoupaAtualizar, opcaoAtualizar, qtdd);
            } else if (opcaoAtualizar == 'tipo' || opcaoAtualizar == 'tamanho' || opcaoAtualizar == 'tecido' || opcaoAtualizar == 'marca' || opcaoAtualizar == 'cor') {
                let entradaDeDado = readline.question("Digite o dado atualizado: ");
                estoqueDeRoupas.atualizarRoupa(idRoupaAtualizar, opcaoAtualizar, entradaDeDado);
            } else {
                console.log('Opção invalida!')
            }

            esperaInputDoUsuario();
            break;
        case 5:
            let idRoupaRemover = readline.questionInt("Qual id da roupa que deseja remover do estoque? ");
            estoqueDeRoupas.removerRoupaDoRegistro(idRoupaRemover);

            esperaInputDoUsuario();
            break;
        case 6:
            process.exit();
        default:
            console.log(`Opção: ${opcao} é invalida!`);
            break;
    }
}

Menu();