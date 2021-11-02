const tasks = document.querySelector('[data-form-button]');

tasks.addEventListener('click', criaTarefa)

function criaTarefa() {
    event.preventDefault();

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;
    
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(botaoConclui());
    lista.appendChild(tarefa);
    input.value = " "
}

const botaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener("click",concluirTarefa );

    return botaoConclui;

}


const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done');
};