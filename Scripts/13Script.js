let boton = document.getElementById("btn");
let resultado = document.getElementById("respuesta");

function Persona(nombre, edad, sexo, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

boton.onclick = function() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
    let persona1 = new Persona(nombre,edad,sexo,peso,altura);
    console.log(persona1.nombre);
    console.log(persona1.edad);
    console.log(persona1.sexo);
    console.log(persona1.peso);
    console.log(persona1.altura);
    resultado.innerHTML =`La Persona Ingresada se llama ${persona1.nombre}, es de Sexo ${persona1.sexo}, tiene ${persona1.edad} años una altura de ${persona1.altura} metros y un peso de ${persona1.peso} kilogramos`;
    resultado.style.color = "blue";
}