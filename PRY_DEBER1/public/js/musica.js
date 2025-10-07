function toggleAcordeon(elemento) {
    const contenido = elemento.nextElementSibling;
    contenido.style.display = contenido.style.display === "block" ? "none" : "block";
}

function abrirModal() {
    document.getElementById("modal-musica").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal-musica").style.display = "none";
}