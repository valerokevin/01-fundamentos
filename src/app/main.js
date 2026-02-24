function convertirTemperatura(valor, from, to) {
    if (isNaN(valor)) {
        return "Error: valor inválido";
    }

    let resultado;

    if (from === "C" && to === "F") {
        resultado = (valor * 9/5) + 32;
    } else if (from === "F" && to === "C") {
        resultado = (valor - 32) * 5/9;
    } else if (from === "C" && to === "K") {
        resultado = valor + 273.15;
    } else {
        return "Error: unidad de temperatura no soportada";
    }

    return ${valor} ${from} = ${resultado} ${to};
}

function convertirLongitud(valor, from, to) {
    if (isNaN(valor)) {
        return "Error: valor inválido";
    }

    let resultado;

    if (from === "m" && to === "km") {
        resultado = valor / 1000;
    } else if (from === "km" && to === "m") {
        resultado = valor * 1000;
    } else if (from === "cm" && to === "m") {
        resultado = valor / 100;
    } else {
        return "Error: unidad de longitud no soportada";
    }

    return ${valor} ${from} = ${resultado} ${to};
}

// Pruebas
console.log(convertirTemperatura(100, "C", "F"));
console.log(convertirTemperatura(32, "F", "C"));
console.log(convertirTemperatura(0, "C", "K"));

console.log(convertirLongitud(1500, "m", "km"));
console.log(convertirLongitud(1.2, "km", "m"));
console.log(convertirLongitud(100, "cm", "m"));