const productos = [
    {
      id: 1,
      nombre: "Cortado",
      precio: 1100,
      img: "multimedia/productoEjemplo.png",
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Mocha",
      precio: 1200,
      img: "multimedia/Mocha.jpeg",
      cantidad: 1,
    },
    {
      id: 3,
      nombre: "Caramel",
      precio: 1300,
      img: "multimedia/Caramel.jpeg",
      cantidad: 1,
    },  
    {
      id: 4,
      nombre: "CCL",
      precio: 1100,
      img: "multimedia/productoEjemplo.png",
      cantidad: 1,
    },
    {
      id: 5,
      nombre: "Choco",
      precio: 1200,
      img: "multimedia/Mocha.jpeg",
      cantidad: 1,
    },
    {
      id: 6,
      nombre: "Vanilla",
      precio: 1300,
      img: "multimedia/Caramel.jpeg",
      cantidad: 1,
    },
    {
      id: 7,
      nombre: "Capuccino",
      precio: 1100,
      img: "multimedia/productoEjemplo.png",
      cantidad: 1,
    },
    {
      id: 8,
      nombre: "Canela",
      precio: 1200,
      img: "multimedia/Mocha.jpeg",
      cantidad: 1,
    },
    {
      id: 9,
      nombre: "House Blend",
      precio: 1300,
      img: "multimedia/Caramel.jpeg",
      cantidad: 1,
    },  
  ];
  
  let contadorCarrito = 0;
  const carrito = [];
  
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        mostrarCarrito()
    }
  })

  const productoCatalogoHTML = (producto) => {
    return `
          <div class="products grid-item-productos">
            <img class="product-img" src=${producto.img}></img>
            <h5 class="text-productos">${producto.nombre}</h5>
            <div class="product-card">
              <p class="text-productos-price">$${producto.precio}</p>
              <button id="btn-catalogo-${producto.id}" type="button" class="btn price-b">Agregar <ion-icon name="cart-outline"></ion-icon></button>
            </div>
          </div>`;
  };
  
  const productoCarritoHTML = (producto) => {
    return `
      <div class="col">
        <div>
          <div class="carrito-elemento">
            <h5 >${producto.nombre}</h5>
            <p>Precio:$${producto.precio}</p>
            <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger ">Quitar <i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>`;
  };

  const mostrarCatalogo = () => {
    
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";
  
    for (const producto of productos) {
      catalogoHTML += productoCatalogoHTML(producto);
    }
  
    catalogoNodo.innerHTML = catalogoHTML;
    botonesCatalogo();
  };

  const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
  
    let carritoHTML = "";
    let precio = 0;
    for (const producto of carrito) { 
      carritoHTML += productoCarritoHTML(producto);
      precio += producto.precio;
      localStorage.setItem("Total Productos",precio)
      localStorage.setItem('carrito' , JSON.stringify(carrito))
    }

    precioNodo.innerHTML = precio;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();

    carritoNum.innerText = carrito.length
  };
  
  const botonesCatalogo = () => { 
    for (const producto of productos) {
      const botonId = `btn-catalogo-${producto.id}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const productoCarrito = {
          nombre: producto.nombre,
          idCompra: contadorCarrito,
          precio: producto.precio,
        };
  
        contadorCarrito++;  //Sugar syntax
        carrito.push(productoCarrito);
        mostrarCarrito();
      });
    }
  };
  
  const botonVaciar = document.getElementById('vaciar-carrito')
  
  botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    mostrarCarrito()
})

  const botonesCarrito = () => {
    for (const producto of carrito) {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
        carrito.splice(index, 1);
        mostrarCarrito();
      });
    }
  };
  
  const carritoNum = document.getElementById('contadorCarrito');

  mostrarCatalogo();



  console.log(productoCatalogoHTML(productos[0]));