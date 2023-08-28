let vec = [];
let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");
let arr1 = document.getElementById("arr1");
let arr2 = document.getElementById("arr2");

boton1.onclick = function(){

    for (let i = 0; i < 7; i++) {
        vec[i] = parseInt(Math.random()*1000);
    }

    for (let i = 0; i < 7; i++) {
        let li = document.createElement("li");
        li.innerHTML = vec[i];
        arr1.append(li);
    }
}

boton2.onclick = function(){

    vec.splice(vec.length-2,2);

    for (let i = 0; i < vec.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = vec[i];
        arr2.append(li);
    }
}