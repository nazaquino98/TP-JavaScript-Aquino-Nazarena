let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let numero3 = parseInt(prompt("Ingrese el tercer numero"));

if (numero1 <= numero2 && numero1 <= numero3 && numero2 <= numero3) {
    console.log("Los números ordenados en forma ascendente son: " + numero1 + " " + numero2 + " " + numero3);

    } else if (numero1 <= numero2 && numero1 <= numero3 && numero3 <= numero2) {
    console.log("Los números ordenados en forma ascendente son: " + numero1 + " " + numero3 + " " + numero2);
    }
      else if (numero2 <= numero1 && numero2 <= numero3 && numero1 <= numero3) {
    console.log("Los números ordenados en forma ascendente son: " + numero2 + " " + numero1 + " " + numero3);

    } else if (numero2 <= numero1 && numero2 <= numero3 && numero3 <= numero1) {
        console.log("Los números ordenados en forma ascendente son: " + numero2 + " " + numero3 + " " + numero1);
    }
  
    else if (numero3 <= numero1 && numero3 <= numero2 && numero1 <= numero2) {
       console.log("Los números ordenados en forma ascendente son: " + numero3 + " " + numero1 + " " + numero2);

    } else if (numero3 <= numero1 && numero3 <= numero2 && numero2 <= numero1) {
        console.log("Los números ordenados en forma ascendente son: " + numero3 + " " + numero2 + " " + numero1);
    }

    else {
        console.log ("Error. Tiene que ingresar un numero valido")
    }
