let boton = document.getElementById("btn");
let letra = document.getElementById("letra");
let respuesta = document.getElementById("respuesta");

letra.oninput = function(){
    if (letra.value != "S" && letra.value != "N") {
        alert("ERROR CARACTER INCORRECTO");
        letra.value = "";
    }
}

boton.onclick = function(){
    if (letra.value == "S") {
        respuesta.innerHTML ="Correcto";
        respuesta.style.color ="green";
    } else {
        respuesta.innerHTML ="Incorrecto";
        respuesta.style.color = "red";
    }
}