const botoes = document.querySelectorAll('.opcao');
const modulos = document.querySelectorAll('.modulo');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(btn => btn.classList.remove('active'));
    modulos.forEach(mod => {
      mod.style.display = 'none';
    });

    botao.classList.add('active');
    const alvo = 'mod-' + botao.dataset.target;
    document.getElementById(alvo).style.display = 'block';
  });
});

function clickMenu() {
    const menu = document.getElementById('itens');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    }