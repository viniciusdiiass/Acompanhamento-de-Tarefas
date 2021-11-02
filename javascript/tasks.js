(() => {

    const tasks = document.querySelector('[data-form-button]');

    tasks.addEventListener('click', criaTarefa)

    function criaTarefa(evento) {
        event.preventDefault();

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class="content">${valor}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(botaoConclui());
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa);
        input.value = " "
    }

    const botaoConclui = () => {
        const botaoConclui = document.createElement('button');
        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'Concluir'
        botaoConclui.addEventListener("click", concluirTarefa);

        return botaoConclui;

    }


    const concluirTarefa = (evento) => {
        const botaoConclui = EventTarget;
        const tarefaCompleta = botaoConclui.parentElement;
        tarefaCompleta.classList.toggle('done');
    };

    const BotaoDeleta = (evento) => {
        const botaoDeleta = document.createElement('button');

        botaoDeleta.innerText = 'Deletar';
        botaoDeleta.addEventListener("click", deletarTarefa);

        return botaoDeleta;
    }

    const deletarTarefa = (evento) => {
        const botaoDeleta = event.target;

        const tarefaCompleta = botaoDeleta.parentElement;

        tarefaCompleta.remove()

        return botaoDeleta;
    }
})();