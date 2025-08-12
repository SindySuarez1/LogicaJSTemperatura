const prompt = require("prompt-sync")();

console.log("**Programa para convertir una temperatura ingresada de grados Celsius a Fahrenheit y Kelvin**")
let temperatura = prompt("Ingrese una temperatura en grados Celcius: ");


// si es un numero y si no hay espacio vacios ejecuta
if (!isNaN(temperatura) && temperatura.trim() != ''){ // isNan = devuelve true si no es numero
    temperatura = parseFloat(temperatura); // recibimos el string y luego lo pasamos a numero
    
    let kelvin = temperatura + 273.15;
    let fahrenheit = (temperatura * (9/5) + 32);

    console.log("La temperatura: " + temperatura + " Celcius");
    console.log("En grados kelvin es: " + kelvin);
    console.log("En grados fahrenheit es: " + fahrenheit);
}else{
    console.log("Ingresa un valor correcto")
}
