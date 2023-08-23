let botonN = document.getElementById("btnN");
let form = document.getElementById("form");
let botonC = document.getElementById("btnC");
let resp = document.getElementById("resp");
let botonM = document.getElementById("btnM");
let mostrar = document.getElementById("mostrar");
let libro01 = new Object;

function Libro (isbn, titulo, autor, numPag){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
}

function crearLibro (){
    let isbn = document.getElementById("isbn").value;
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let numPag = document.getElementById("paginas").value;
    return new Libro(isbn, titulo, autor, numPag);
}

Libro.informar = (obj)=> `ISBN: ${obj.isbn}, Titulo: ${obj.titulo}, Autor: ${obj.autor}, Numeros de Paginas: ${obj.numPag}`;

botonN.onclick = function(){
    form.style.display = "block";
}

botonC.onclick = function(){
    libro01 = crearLibro();
    form.style.display = "none";
    resp.innerHTML = "LIBRO CREADO CORRECTAMENTE";
    console.log(Libro.informar(libro01))
}

botonM.onclick = function(){
    mostrar.innerHTML = Libro.informar(libro01);
}