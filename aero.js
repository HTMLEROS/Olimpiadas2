document.addEventListener("DOMContentLoaded", () => {
    const abrir = document.getElementById("abrirBarra");
    const cerrar = document.getElementById("cerrarBarra");
    const barra = document.getElementById("barraLateral");

    abrir.addEventListener("click", () => {
        barra.classList.add("mostrar-barra");
        abrir.style.display = "none";
    });

    cerrar.addEventListener("click", () => {
        barra.classList.remove("mostrar-barra");
        abrir.style.display = "block";
    });
});