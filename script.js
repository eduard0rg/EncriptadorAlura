const textAreaEncriptador = document.querySelector(".area-encriptador");
const textAreaMensaje = document.querySelector(".area-mensaje");
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
console.table(matrizCodigo);

function encriptarTexto(texto) {
    let textoEncriptado = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        const letra = matrizCodigo[i][0];
        const codigo = matrizCodigo[i][1];
        const regex = new RegExp(letra, 'g');
        textoEncriptado = textoEncriptado.replace(regex, codigo);
    }
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = textoEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        const letra = matrizCodigo[i][0];
        const codigo = matrizCodigo[i][1];
        const regex = new RegExp(codigo, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, letra);
    }
    return textoDesencriptado;
}

botonEncriptar.addEventListener("click", () => {
    const textoOriginal = textAreaEncriptador.value.toLowerCase();
    const textoEncriptado = encriptarTexto(textoOriginal);
    textAreaMensaje.value = textoEncriptado;
});

botonDesencriptar.addEventListener("click", () => {
    const textoEncriptado = textAreaEncriptador.value.toLowerCase();
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    textAreaMensaje.value = textoDesencriptado;
});

botonCopiar.addEventListener("click", () => {
    textAreaMensaje.select();
    textAreaMensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
});




