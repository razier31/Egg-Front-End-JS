let boton = document.getElementById("btn");
let resultado = document.getElementById("resultado");
let pos = 0;

boton.onclick = function(){
    let frase = document.getElementById("frase").value;
    frase = frase.split(" ");
    let max = frase[0].length;
    for (let i = 1; i < frase.length; i++) {
        if (frase[i].length>max) {
            max = frase[i].length;
            pos = i;
        }
    }
    resultado.innerHTML = `La palabra mas larga de la frase es: ${frase[pos]}`
}