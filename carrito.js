
function agregarAlCarrito(nombre, precio, imagen) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio, imagen });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${nombre} ha sido agregado al carrito 🛒`);
}


document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("carrito-contenido");
  if (contenedor) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
  contenedor.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío 😢</p>';
}
 else {
      let total = 0;
      contenedor.innerHTML = `
        <div class="lista-carrito">
          ${carrito.map(item => {
            total += item.precio;
            return `
              <div class="item-carrito">
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="info">
                  <p><strong>${item.nombre}</strong></p>
                  <p>Precio: $${item.precio.toLocaleString()}</p>
                </div>
              </div>
            `;
          }).join("")}
        </div>
        <h3>Total: $${total.toLocaleString()}</h3>
      `;
    }
  }


  const btnVaciar = document.getElementById("vaciarCarrito");
  if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
      localStorage.removeItem("carrito");
      location.reload();
    });
  }
});
