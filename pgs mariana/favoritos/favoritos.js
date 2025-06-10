function clickMenu() {
    const menu = document.getElementById('itens');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    }
function mostrarMais() {
    const ocultos = document.querySelectorAll('.linha.oculto');
    ocultos.forEach(el => {
      el.classList.add('mostrar');
      el.classList.remove('oculto');
    });

    document.querySelector('.vermais').style.display = 'none';
    document.querySelector('.vermenos').style.display = 'block';
}
function mostrarMenos() {
    const mostrados = document.querySelectorAll('.linha.mostrar');
    mostrados.forEach(el => {
      el.classList.add('oculto');
      el.classList.remove('mostrar');
});

    document.querySelector('.vermais').style.display = 'block';
    document.querySelector('.vermenos').style.display = 'none';
}

    document.querySelectorAll('.abrir-fechar').forEach(icon => {
    icon.addEventListener('click', () => {
      const linha = icon.closest('.linha');
      const emailSpan = linha.querySelector('.email');

    if (emailSpan.textContent.includes('*')) {
        emailSpan.textContent = 'usuario@exemplo.com'; 
        icon.src = '../imagens/olho.png';
        icon.alt = 'Olho Aberto';
    } else {
        emailSpan.textContent = '*******@*****.com';
        icon.src = '../imagens/olho-fechado.png';
        icon.alt = 'Olho Fechado';
    }
  });
});
