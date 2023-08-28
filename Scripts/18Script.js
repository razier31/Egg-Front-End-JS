var valores = [true, 5, false, "hola", "adios", 2]
let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");
let palabra = document.getElementById("pal");
let suma = document.getElementById("sum");
let resta = document.getElementById("res");
let multiplicacion = document.getElementById("mul");
let division = document.getElementById("div");

boton1.onclick = function(){
    if (valores[3].length > valores[4].length) {
        palabra.value = valores[3];
    } else {
        palabra.value = valores[4];
    }
}

boton2.onclick = function(){
    suma.value = valores[1] + valores[5];
    resta.value = valores[1] - valores[5];
    multiplicacion.value = valores[1] * valores[5];
    division.value = valores[1] / valores[5];
}
