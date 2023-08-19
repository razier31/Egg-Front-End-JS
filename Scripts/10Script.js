let boton = document.getElementById("btn");
let respuesta = document.getElementById("resultado")
let flecha = (cadena) => cadena.split("").reverse().join("");

boton.onclick = function (){
    let frase = document.getElementById("frase").value;
    respuesta.innerHTML = flecha(frase) ;
}