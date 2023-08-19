let boton = document.getElementById("btn");
let resultado = document.getElementById("resultado");
let newfrase = "";

boton.onclick = function(){
    let frase = document.getElementById("frase").value;
    
    for (let i= 0; i < frase.length; i++) {
        newfrase += frase.substring(i,i+1)+" ";
    }
    resultado.innerHTML = newfrase;
}