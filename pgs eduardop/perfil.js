document.addEventListener("DOMContentLoaded", () => {
  const botoesEditar = document.querySelectorAll(".btnEditar");

  botoesEditar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const linha = btn.closest(".linhaPerfil");
      const containerTexto = linha.querySelector("div"); 
      const h3 = containerTexto.querySelector("h3");
      const pOuInput = containerTexto.querySelector("p") || containerTexto.querySelector("input");
      const ehSenha = h3.innerText.toLowerCase().includes("senha");

      if (pOuInput.tagName === "P") {
        const input = document.createElement("input");
        input.type = ehSenha ? "password" : "text";
        input.value = ehSenha ? "" : pOuInput.innerText;
        containerTexto.replaceChild(input, pOuInput);
        btn.innerText = "Salvar";
      } else {
        const novoP = document.createElement("p");
        novoP.innerText = ehSenha ? "************" : pOuInput.value;
        containerTexto.replaceChild(novoP, pOuInput);
        btn.innerText = "Editar";
      }
    });
  });

  const avatar = document.querySelector(".avatar");
  const btnUpload = document.querySelector(".btnUpload");

  btnUpload.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = () => {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          avatar.style.backgroundImage = `url(${reader.result})`;
          avatar.style.backgroundSize = "cover";
          avatar.innerText = "";
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
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
