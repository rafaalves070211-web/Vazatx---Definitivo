const container = document.querySelector(".cards-container");
const botao = document.querySelector("#botao-noticias");

if (container && botao) {

    const totalCards = container.children.length;

    if (totalCards <= 3) {
        botao.hidden = true;
    } else {
        botao.hidden = false;

        botao.addEventListener("click", function() {

            container.classList.toggle("mostrar-todos");

            if (container.classList.contains("mostrar-todos")) {
                botao.textContent = "Ocultar notícias antigas";
            } else {
                botao.textContent = "Notícias antigas";
            }

        });
    }
}

const botaoModo = document.querySelector("#alternar-modo");

if (botaoModo) {

    const modoSalvo = localStorage.getItem("modo-serio");

    if (modoSalvo === "ativado") {
        document.body.classList.add("modo-serio");
        botaoModo.textContent = "Ativar modo atual";
    }

    botaoModo.addEventListener("click", function() {

        document.body.classList.toggle("modo-serio");

        const modoSerioAtivo = document.body.classList.contains("modo-serio");

        if (modoSerioAtivo) {
            localStorage.setItem("modo-serio", "ativado");
            botaoModo.textContent = "Ativar modo atual";
        } else {
            localStorage.setItem("modo-serio", "desativado");
            botaoModo.textContent = "Ativar modo sério";
        }

    });
}