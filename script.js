const textArea = document.querySelector("#text");
const btnCopiar = document.querySelector("#btn-copiar");
const alertContainer = document.querySelector
(".copiador-alert-container");
let text = "";



textArea.addEventListener("input", ({target}) => {
    text = target.value;
})



btnCopiar.addEventListener("click", () => {
    if (text != "") {
        copiarTexto();
        mostrarAlerta();
    }
    else {
        tirarAlerta();
    }
})

function copiarTexto() {
    textArea.setSelectionRange(0, 999999);
    navigator.clipboard.writeText(text);
}

function mostrarAlerta() {
    alertContainer.style.visibility = "visible";
}

function tirarAlerta() {
    alertContainer.style.visibility = "hidden";
}