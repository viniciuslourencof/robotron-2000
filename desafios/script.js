const lista = document.querySelector('.lista');

const listaBotoes = document.querySelectorAll('button');

listaBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.getAttribute('tipo') == 'sumir') {
            lista.classList.add('invisivel');
        } else {
            lista.classList.remove('invisivel');
        }
    })
})
