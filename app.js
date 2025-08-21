

let listaDeAmigos = [];  


function agregarAmigo(){  
  
    let nombre  = document.getElementById("amigo").value;


    if (!nombre){
     alert("Por favor, ingrese un nombre")
     return; 
    }
 
    if (!isNaN(nombre)){
      alert("No se permiten número en el nombre");
     return 
    }

    if (listaDeAmigos.includes(nombre.toLowerCase())){
        mostrarAmigos();
     alert("Este nombre ya esta en la lista");
     return;
    }


listaDeAmigos.push(nombre.toLowerCase());

mostrarAmigos();

document.getElementById("amigo").value = "";
}


function mostrarAmigos() {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}





function sortearAmigo(){
   
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
let amigoSorteado = listaDeAmigos[indiceAleatorio];

 document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSorteado;

}



