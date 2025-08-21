

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



}
