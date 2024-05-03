let edad = prompt ("Ingresa tu edad");

if (edad >= 0 && edad <= 12) {
    console.log("Sos un niño.");

} else if (edad >= 13 && edad <= 19) {
    console.log("Sos un adolescente.");

  } else if (edad >= 20 && edad <= 59) {
    console.log("Sos un adulto.");

  } else if (edad >= 60) {
    console.log("Sos un adulto mayor.");

  } else {
    console.log("Error. No es una edad. Ingresa una edad valida");
  }