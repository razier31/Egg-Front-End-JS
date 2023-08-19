let ban = true;
let num = document.getElementById("num");
let min;
let max;
let lista = [];
let ul = document.getElementById("lista");
let botonA = document.getElementById("btnA");
let info = document.getElementById("info");
let botonL = document.getElementById("btnL");


botonA.onclick = function (){
    num = document.getElementById("num").value;
    
    if (ban) {
        min = num;
        max = num;
        ban = false;
    }
    
    if (num != 0) {
        lista.push(num);
        info.innerHTML = `El numero ${num} fue Agregado a la lista`;
        if (num>max) {
            max = num;
        }
        if (num<min) {
            min = num;
        }
    } else {
        info.innerHTML = `Se Detecto el 0 mostrando resultados 
        Menor = ${min} /// Mayor = ${max} /// Promedio = ${promedio()}`;
        botonA.style.display = "none";
    }

}

function promedio(){
    let acu = 0;
    lista.forEach(e => {
        acu += Number(e);   
    });
    return acu / lista.length;
}

botonL.onclick = function(){
    lista.forEach(e => {
        let li = document.createElement("li"); 
        li.innerHTML = e; 
        ul.append(li);  
    });
}