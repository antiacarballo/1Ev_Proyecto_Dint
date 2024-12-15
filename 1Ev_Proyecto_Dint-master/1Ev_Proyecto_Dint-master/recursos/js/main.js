document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-menu");
    const tituloPrincipal = document.querySelector(".titulo-principal");
    const numeritoCarrito = document.getElementById("numerito");

    let productos = [];
<<<<<<< HEAD
    let contadorCarrito = 0; 
=======
    let contadorCarrito = 0; // Contador para los productos del carrito

    // Cargar productos desde productos.json
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
    fetch("./js/productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then((data) => {
<<<<<<< HEAD
            productos = data; 
            mostrarProductos(productos); 
        })
        .catch((error) => console.error("Error al cargar los productos:", error));

    function mostrarProductos(productosElegidos) {
        productosContainer.innerHTML = ""; 
=======
            productos = data; // Guardar los productos
            mostrarProductos(productos); // Mostrar todos los productos inicialmente
        })
        .catch((error) => console.error("Error al cargar los productos:", error));

    // Función para mostrar productos
    function mostrarProductos(productosElegidos) {
        productosContainer.innerHTML = ""; // Limpiar contenedor
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
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
<<<<<<< HEAD
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

=======
        actualizarBotonesAgregar(); // Actualizar eventos de botones agregar
    }

    // Filtrar y mostrar solo los primeros 5 productos de una categoría
    function mostrarTopCinco(categoriaId) {
        const productosFiltrados = productos.filter((producto) => producto.categoria.id === categoriaId);
        const topCinco = productosFiltrados.slice(0, 5); // Obtener solo los primeros 5
        mostrarProductos(topCinco); // Mostrar los productos filtrados
    }

    // Configurar eventos para botones de categorías
    botonesCategorias.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            // No hacer nada si se hace clic en el botón del carrito
            if (e.currentTarget.classList.contains("boton-carrito")) return;

            // Lógica para cambiar la categoría mostrada
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
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

<<<<<<< HEAD
            if (e.currentTarget.id !== "todos" && !e.currentTarget.classList.contains("boton-carrito")) {
=======
            // Evitar que los botones "Carrito" y "Todos los productos" pierdan su clase 'active'
            if (e.currentTarget.id !== "todos" && !e.currentTarget.classList.contains("boton-carrito")) {
                // Eliminar la clase 'active' de todos los botones de categorías, excepto el botón del carrito
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
                botonesCategorias.forEach((boton) => {
                    if (!boton.classList.contains("boton-carrito") && boton.id !== "todos") {
                        boton.classList.remove("active");
                    }
                });
            }

<<<<<<< HEAD
          
=======
            // Añadir la clase 'active' al botón que fue presionado
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
            e.currentTarget.classList.add("active");
        });
    });

<<<<<<< HEAD
    
=======
    // Actualizar eventos de botones "Agregar"
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
    function actualizarBotonesAgregar() {
        const botonesAgregar = document.querySelectorAll(".producto-agregar");
        botonesAgregar.forEach((boton) => {
            boton.addEventListener("click", (e) => {
                const productId = e.currentTarget.dataset.id;
                console.log(`Producto agregado al carrito: ${productId}`);
<<<<<<< HEAD
                contadorCarrito++;
                actualizarCarritoUI(); 
=======
                contadorCarrito++; // Incrementar contador del carrito
                actualizarCarritoUI(); // Actualizar la interfaz del carrito
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
            });
        });
    }

<<<<<<< HEAD
   
=======
    // Actualizar el número del carrito en la UI
>>>>>>> 9fc5f72edbd386214a94dbca662552a1a20cfefd
    function actualizarCarritoUI() {
        numeritoCarrito.textContent = contadorCarrito;
    }
});
