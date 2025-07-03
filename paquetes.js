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

  class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }

    obtenerDetalle() {
      return `${this.nombre} - $${this.precio}`;
    }
  }

  const listaCarrito = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");
  let total = 0;

  function actualizarTotal(valor) {
    total += valor;
    if (total < 0) total = 0; // prevenir negativos
    totalElemento.textContent = total;
  }

  document.querySelectorAll(".agregar-carrito").forEach(boton => {
    boton.addEventListener("click", () => {
      const nombre = boton.getAttribute("data-nombre");
      const precio = parseInt(boton.getAttribute("data-precio"));

      const producto = new Producto(nombre, precio);

      const item = document.createElement("li");
      item.className = "list-group-item d-flex justify-content-between align-items-center";

      item.innerHTML = `
        ${producto.obtenerDetalle()}
        <button class="btn btn-sm btn-danger ms-3 eliminar-item">✕</button>
      `;

      listaCarrito.appendChild(item);
      actualizarTotal(precio);

      // Eliminar producto del carrito al hacer clic en el botón ✕
      item.querySelector(".eliminar-item").addEventListener("click", () => {
        item.remove();
        actualizarTotal(-precio);
      });
    });
  });

