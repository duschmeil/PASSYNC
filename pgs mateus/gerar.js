function copyPassword() {
    const password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
    alert("Senha copiada!");
}

function generatePassword() {
    document.getElementById("password").value = "N3w$P@ss#12";
}

function clickMenu() {
    const menu = document.getElementById('itens');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    }