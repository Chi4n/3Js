// Array de Productos

const productos = [
    {
        id: "indu01",
        nombre: "Buzo What",
        imagen: "./img/Img1.jpg",
        precio: 2500
    },
    {
        id: "indu02",
        nombre: "Remeron City",
        imagen: "./img/Img2.jpg",
        precio: 3000
    },
    {
        id: "indu03",
        nombre: "New York",
        imagen: "./img/Img3.jpg",
        precio: 6000
    },
    {
        id: "indu04",
        nombre: "Big Ciel",
        imagen: "./img/Img4.jpg",
        precio: 3000
    },
    {
        id: "indu05",
        nombre: "Buzo Oversize",
        imagen: "./img/Img5.jpg",
        precio: 10000
    },
    {
        id: "indu06",
        nombre: "Remera Entallada",
        imagen: "./img/Img6.png",
        precio: 400
    },
    {
        id: "indu07",
        nombre: "Buzo Los Angeles ",
        imagen: "./img/Img7.jpg",
        precio: 11500
    },
    {
        id: "indu08",
        nombre: "Buzo White",
        imagen: "./img/Img8.jpg",
        precio: 12000
    }
 ]; 


  // profe/tutor, a la hora de hacer el fetch me lo muestra correctamente pero no entiendo por que no me lo agrega el producto al carrito, dejo esto escrito aca para poder saber a la hora de la devolucion cual era la solucion.
  //muhas gracias!!! y buena vida ambos!! 

// fetch("./js/producto.json")
//      .then(response => response.json())
//      .then(data => {
//         mostrarProductos(data)
//      })
     


let productosEnCarrito = [];
const contenedorIndu = document.querySelector("#contenedor-indu");
const contadorCarrito = document.querySelector("#contador-carrito");
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

function mostrarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.classList.add("col-lg-3");
        div.innerHTML = `
            <div class="card shadow card-indu">
                <img src="${producto.imagen}" class="card-img-top img-indu" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title titulo-indu">${producto.nombre}</h5>
                    <p class="precio-indu">$${producto.precio}</p>
                    <button class="btn-card boton-agregar-indu" id="${producto.id}"><span>Agregar</span></button>
                </div>
            </div>
        `;

        contenedorIndu.append(div);
    });
    
};

function agregarProdAlCarrito(e) {

    Toastify({
        text: "Producto Agregado",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #646566, #030303)",
          borderRadius: "1rem",
          textTransform: "uppercase"
        },
        offset: {
            x: '4rem', 
            y: '2rem' 
          },
        onClick: function(){} 
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const i = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[i].cantidad++;

    } else {
        productoAgregar.cantidad = 1;
        productosEnCarrito.push(productoAgregar);
    }

    actualizarContadorCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarContadorCarrito() {
    let contador = productosEnCarrito.reduce((acu, producto) => acu + producto.cantidad, 0);
    contadorCarrito.innerHTML = contador;
};


/************************************************************************************************************/
mostrarProductos()
const botonesAgregar = document.querySelectorAll(".boton-agregar-indu");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarContadorCarrito();
} else {
    productosEnCarrito = [];
}

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarProdAlCarrito);
});



