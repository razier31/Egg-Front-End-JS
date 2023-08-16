let boton = document.getElementById("btn");

boton.onclick = function(){
    let edad = document.getElementById("edad");

    if (edad.value>17) {
        alert("Eres Mayor de Edad");
    } else {
        alert("Todavia eres Menor de Edad");
    }
}