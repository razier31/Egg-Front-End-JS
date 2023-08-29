let vec1 = [];
let vec2 = [];
vec2.length = 20;
let boton = document.getElementById("btn");
let arr1 = document.getElementById("arr1");
let arr2 = document.getElementById("arr2");

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }

boton.onclick = function(){

    for (let i = 0; i < 50; i++) {
        vec1[i] = Math.random()*(1000-(-1000))+(-1000);
    }

    vec1.sort(compareNumeric);

    for (let i = 0; i < 50; i++) {
        let li = document.createElement("li");
        li.innerHTML = vec1[i];
        arr1.append(li);
    }

    for (let i = 0; i < 10; i++) {
        vec2[i] = vec1[i];
    }

    vec2.fill(0.5,10,20);

    for (let i = 0; i < 20; i++) {
        let li = document.createElement("li");
        li.innerHTML = vec2[i];
        arr2.append(li);
    }
}