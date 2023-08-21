let boton = document.getElementById("btn");
let flecha = (tipo)=> typeof(tipo);
let resultado = document.getElementById("resultado");

boton.onclick = function() {
    let valor = document.getElementById("valor").value;
    resultado.innerHTML = flecha(valor);
}