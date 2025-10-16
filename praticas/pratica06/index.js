const readline = require('readline-sync');
const controlador = require('./controlador');


function menu() {
    console.log('1 - Adicionar contato');
    console.log('2 - Buscar contato');
    console.log('3 - Atualizar contato');
    console.log('4 - Remover contato');
    console.log('5 - Sair');
}


async function escolherOpcao(opcao) {
    switch(opcao) {
        case '1': {
            const nome = readline.question('Digite o nome da tarefa: ');
            await controlador.adicionarTarefa(nome);
            console.log('Tarefa adicionada!');
            break;
        }
        case '2': {
            const nome = readline.question('Digite o nome da tarefa: ');
            const tarefa = await controlador.buscarTarefa(nome);
            if (tarefa.id) {
                console.log(`Tarefa: ${tarefa.nome}, Concluída: ${tarefa.concluida}`);
            } else {
                console.log('Tarefa não encontrada!');
            }
            break;
        }
        case '3': {
            const nome = readline.question('Digite o nome da tarefa: ');
            const concluida = readline.question('A tarefa foi concluída? (true/false): ') === 'true';
            await controlador.atualizarTarefa(nome, concluida);
            console.log('Tarefa atualizada!');
            break;
        }
        case '4': {
            const nome = readline.question('Digite o nome da tarefa: ');
            await controlador.removerTarefa(nome);
            console.log('Tarefa removida!');
            break;
        }
        case '5': {
            console.log('Saindo...');
            process.exit();
        }
        default:
            console.log('Opção inválida!');
    }
}


async function main() {
    while (true) {
        menu();
        const opcao = readline.question('Escolha uma opção: ');
        await escolherOpcao(opcao);
    }
}


main();
