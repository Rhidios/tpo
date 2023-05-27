function openNav(){
    document.getElementById("mobile-menu").style.width = "90%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function enviarFormulario(){
    var nombreContacto = document.getElementById('nombre').value;
    var emailContacto = document.getElementById('email').value;
    var mensajeContacto = document.getElementById('mensaje').value;
    const DOMINIOS = ['@gmail.com', '@hotmail.com', '@yahoo.com']

    function confirmarFormulario(){
        if(confirm(`Nombre: ${nombreContacto}`)){
            if (confirm(`Email: ${emailContacto}`)){;
            confirm(`Mensaje: ${mensajeContacto}`);
            };
        };
    }

    if(nombreContacto == '' || emailContacto == '' || mensajeContacto == ''){
        alert('Por favor complete todas las casillas');

    }
    else {
        var dominioValido = false;
        for (var i = 0; i < DOMINIOS.length; i++) {
          if (emailContacto.endsWith(DOMINIOS[i])) {
            dominioValido = true;
            break;
          }
        }
        if (dominioValido) {
          confirmarFormulario();
        }
        else {
          alert('Por favor incluya un email con uno de los siguientes dominios: ' + DOMINIOS.join(', '));
        }
    }
}

const PRODUCTOS = [
  { nombre: "Comoda colores", precio: 5700 },
  { nombre: "Escritorio blanco", precio: 3800 },
  { nombre: "Escritorio celeste", precio: 8500 },
  { nombre: "Recibidor celeste", precio: 4100 },
  { nombre: "Rack color natural", precio: 4900 },
  { nombre: "Vitrina rosa", precio: 8000 }
];

const BOTONCOMPRAR = document.querySelectorAll('.comprar');

BOTONCOMPRAR.forEach((boton) => {
  boton.addEventListener('click', function() {
    const TARJETA = boton.closest('.tarjeta');
    const NOMBREPROD = TARJETA.querySelector('h3').innerText;
    const PRECIOPROD = parseFloat(TARJETA.querySelector('p').innerText);

    agregarAlCarrito(NOMBREPROD, PRECIOPROD);
  });
});

function agregarAlCarrito(nombre, precio) {
  const PRODUCTO = { nombre, precio };
  PRODUCTOS.push(PRODUCTO);
  mostrarProductosEnCarrito();
  window.location.href = "carrito.html";
  alert(`Se ha agregado "${nombre}" al carrito.`);
}

function mostrarProductosEnCarrito() {
  const carritoList = document.getElementById('lista-carrito');
  carritoList.innerHTML = '';
  PRODUCTOS.forEach((PRODUCTO) => {
    const li = document.createElement('li');
    li.textContent = `${PRODUCTO.nombre} - ${PRODUCTO.precio}`;
    carritoList.appendChild(li);
  });
}

const checkoutBtn = document.getElementById('checkout-btn');







/* //Inicializa el SDK de MP
const MP = new MercadoPago(7196607006273756)

//Obtener info del producto
const PRODUCTOS = [
  {nombre: "Comoda colores", precio:5700},
  {nombre: "Escritorio blanco", precio:3800},
  {nombre: "Escritorio celeste", precio:8500},
  {nombre: "Recibidor celeste", precio:4100},
  {nombre: "Rack color natural", precio:4900},
  {nombre: "Vitrina rosa", precio:8000},
];*/
