let num = document.getElementById("num");
let resp = document.getElementById("resp");

num.oninput = function(){
    if (num.value != 0) {
        if (num.value % 2 == 0) {
            resp.innerHTML = "El numero es Par";    
        } else {
            resp.innerHTML = "El numero es Impar";
        }
    } else {
        resp.innerHTML = "El numero es igual a Cero";
    }
}