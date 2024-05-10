let numeroArticulos = parseInt(prompt("Ingresa el numero de articulos:"));
let precioTotal = parseInt(prompt("Ingresa el precio total"));

let descuento = precioTotal * 0.15;
let precioConDescuento = precioTotal - descuento;


    if (numeroArticulos >= 10 && precioTotal > 20000) {
        
        console.log("Se aplico un descuento del 15%. Precio a pagar: " + precioConDescuento);
    } else if (numeroArticulos < 10 || precioTotal < 20000 ) {
        console.log("No se cumple la cantidad minima de articulos o el precio total necesario para aplicar el descuento");
    
    } else {
    console.log("Ingresa valores validos (numeros mayores o iguales a 1).");
}

 if (isNaN(numeroArticulos)) {
    alert("Ingrese un valor distinto a vacio o igual a un numero");
} else if (isNaN(precioTotal)) {
        alert("Ingrese un valor distinto a vacio o igual a un numero");
    } else if (numeroArticulos <= 0) {
    alert("No tiene que ser 0");
}
else if (precioTotal <= 0) {
    alert("No tiene que ser 0");
}