import BotaoConclui from "./componentes/concluiTarefas.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

let tarefas = []
const handleNovoItem = (evento) => {
    event.preventDefault();
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);

    const dataFormatada = data.format('DD/MM/YYYY')
    const valor = input.value;
    const dados = {
        valor,
        dataFormatada
    };
    
    const criaTarefaComData = criaTarefa(dados)
    tarefas.push(dados)
    lista.appendChild(criaTarefaComData);

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    input.value = " "
}

const criaTarefa = ({valor, dataFormatada}) => {

    

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content"> ${dataFormatada} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta())

    return tarefa;
    
}

const tarefa = document.querySelector('[data-form-button]');

tarefa.addEventListener('click', handleNovoItem);
