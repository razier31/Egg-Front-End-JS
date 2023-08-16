let boton = document.getElementById("btn");
let area = document.getElementById("area");
let perimetro = document.getElementById("perimetro");


boton.onclick = function (){
    let radio = document.getElementById("radio");
    
    area.innerHTML = Math.PI * Math.pow(radio.value,2);
    perimetro.innerHTML = 2* Math.PI * radio.value;
    
    
}