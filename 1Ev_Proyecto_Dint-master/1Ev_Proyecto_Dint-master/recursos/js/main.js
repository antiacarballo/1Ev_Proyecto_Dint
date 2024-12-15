document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-menu");
    const tituloPrincipal = document.querySelector(".titulo-principal");
    const numeritoCarrito = document.getElementById("numerito");

    let productos = [];
    let contadorCarrito = 0; 
    fetch("./js/productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then((data) => {
            productos = data; 
            mostrarProductos(productos); 
        })
        .catch((error) => console.error("Error al cargar los productos:", error));

    function mostrarProductos(productosElegidos) {
        productosContainer.innerHTML = ""; 
        productosElegidos.forEach((producto) => {
            const productoHTML = `
                <div class="producto">
                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" data-id="${producto.id}">Agregar</button>
                    </div>
                </div>
            `;
            productosContainer.innerHTML += productoHTML;
        });
        actualizarBotonesAgregar(); 
    }

    function mostrarTopCinco(categoriaId) {
        const productosFiltrados = productos.filter((producto) => producto.categoria.id === categoriaId);
        const topCinco = productosFiltrados.slice(0, 5);
        mostrarProductos(topCinco); 
    }

    botonesCategorias.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("boton-carrito")) return;

            if (e.currentTarget.id === "todos") {
                tituloPrincipal.innerText = "Todos los productos";
                mostrarProductos(productos);
            } else if (e.currentTarget.id === "moviles") {
                tituloPrincipal.innerText = "Móviles";
                mostrarTopCinco("moviles");
            } else if (e.currentTarget.id === "portatiles") {
                tituloPrincipal.innerText = "Portátiles";
                mostrarProductos(productos.filter((producto) => producto.categoria.id === "portatiles"));
            } else if (e.currentTarget.id === "televisiones") {
                tituloPrincipal.innerText = "Televisores";
                mostrarProductos(productos.filter((producto) => producto.categoria.id === "televisiones"));
            }

            if (e.currentTarget.id !== "todos" && !e.currentTarget.classList.contains("boton-carrito")) {
                botonesCategorias.forEach((boton) => {
                    if (!boton.classList.contains("boton-carrito") && boton.id !== "todos") {
                        boton.classList.remove("active");
                    }
                });
            }

          
            e.currentTarget.classList.add("active");
        });
    });

    
    function actualizarBotonesAgregar() {
        const botonesAgregar = document.querySelectorAll(".producto-agregar");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                const productId = e.currentTarget.dataset.id;
                console.log(`Producto agregado al carrito: ${productId}`);
                contadorCarrito++;
                actualizarCarritoUI(); 
            });
        });
    }

   
    function actualizarCarritoUI() {
        numeritoCarrito.textContent = contadorCarrito;
    }
});
