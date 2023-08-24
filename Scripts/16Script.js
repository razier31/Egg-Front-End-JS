let vec1 = [];
let vec2 = [];
let boton = document.getElementById("btn");
let listV1 = document.getElementById("vec1");
let listV2 = document.getElementById("vec2");

boton.onclick = function(){
    
    for (let i = 0; i < 5; i++) {
        vec1[i] = parseInt(Math.random()*1000);
        vec2[i] = parseInt(Math.random()*1000);        
    }

    for (let i = 0; i < 5; i++) {
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        li1.innerHTML = vec1[i];
        li2.innerHTML = vec2[i];
        listV1.append(li1);
        listV2.append(li2);        
    }
}