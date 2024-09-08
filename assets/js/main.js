// Precio base del producto
var precio = 400000;

// Inicializar cantidad
var cantidad = 0;

// Seleccionar elementos del DOM
var precioSpan = document.querySelector(".precio-inicial");
var cantidadSpan = document.querySelector(".cantidad");
var totalSpan = document.querySelector(".valor-total");

// Mostrar el precio base
precioSpan.innerHTML = precio;
totalSpan.innerHTML = cantidad * precio;

// Incrementar la cantidad y actualizar el total
document.querySelector("#incrementar").setAttribute("onclick", `
    cantidad = cantidad + 1;
    document.querySelector('.cantidad').innerHTML = cantidad;
    document.querySelector('.valor-total').innerHTML = cantidad * precio;
`);

// Disminuir la cantidad y actualizar el total
document.querySelector("#decrementar").setAttribute("onclick", `
    cantidad = (cantidad - 1 < 0) ? 0 : cantidad - 1;
    document.querySelector('.cantidad').innerHTML = cantidad;
    document.querySelector('.valor-total').innerHTML = cantidad * precio;
`);
