let boton = document.getElementById("calcular");
let resp = document.getElementById("resp");

function Circulo (radio){
    this.radio = radio;
    this.area = Math.PI * Math.pow(radio,2);
    this.perimetro = 2* Math.PI * radio;
}

boton.onclick = function (){
    let cir01 = new Circulo(document.getElementById("radio").value);
    resp.innerHTML = `AREA = ${cir01.area}, PERIMETRO = ${cir01.perimetro}`;
}