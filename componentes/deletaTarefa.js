const deletarTarefa = (carregaTarefa, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    carregaTarefa();
}

const BotaoDeleta = (carregaTarefa, id) => {
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', ()=> deletarTarefa(carregaTarefa, id))

    return botaoDeleta
}



export default BotaoDeleta