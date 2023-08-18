let limite = document.getElementById("limite");
let boton = document.getElementById("btn");
let lista = document.getElementById("lista");
let resp = document.getElementById("resp");
let acumulador = 0;

boton.onclick = function(){
    let num = document.getElementById("num").value;
    acumulador = acumulador + Number(num);
    agregar(num);

    if (acumulador<Number(limite.value)) {
        resp.innerHTML = `No se Supero el Limite Suma Total ${acumulador}`;
        resp.style.color = "green"
    }else{
        resp.innerHTML = `Se Supero el Limite Suma Total ${acumulador}`;
        resp.style.color = "red"
        boton.style.display = "none";
    }
}

function agregar(numero){
    numero = Number(numero);
    let li = document.createElement("li");
    li.innerHTML = numero; 
    lista.append(li);
}