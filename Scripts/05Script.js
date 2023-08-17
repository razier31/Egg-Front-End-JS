let boton = document.getElementById("btn");
let resultado = document.getElementById("resultado");

boton.onclick = function(){
    let val1 = document.getElementById("num1").value;
    let val2 = document.getElementById("num2").value;
    let ope = document.querySelector('input[name="operacion"]:checked').value;

    switch (ope) {
        case "s":
            resultado.innerHTML = Number(val1) + Number(val2);
            break;
        case "r":
            resultado.innerHTML = Number(val1) - Number(val2);
            break;
        case "m":
            resultado.innerHTML = Number(val1) * Number(val2);
            break;
        case "d":
            resultado.innerHTML = Number(val1) / Number(val2);
            break;    
    
    }
}