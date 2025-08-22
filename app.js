//Se crea un array (ideal para guardar varios valores en orden)
let listaDeAmigos = [];  

//Se crea la funcion para añdir a un amigo al array
function agregarAmigo(){  
    
    //Obtenemos con getElement el contenido del input con id = "amigo" del html
    //value se usa para traer solo lo que ingresa el usuario y no todo el formulario
    let nombre  = document.getElementById("amigo").value;

// VALIDACIÓN 1: Campo vacío !nombre valida: "", null, undefined (valores "falsy")
    if (!nombre){
     alert("Por favor, ingrese un nombre")
     return;  // detiene la función si el dato no es válido
    }
// VALIDACIÓN 2: que no sea un número puro,  Nota: "Juan123" pasa esta validación
    if (!isNaN(nombre)){
      alert("No se permiten número en el nombre");
     return  // detiene la función si el dato no es válido
    }

// VALIDACIÓN 3: duplicados (insensible a mayúsculas), convierte nombre a minusculas
// Mira si el nombre ya esta guardado (includes) en la lista
    if (listaDeAmigos.includes(nombre.toLowerCase())){
        mostrarAmigos();
     alert("Este nombre ya esta en la lista");
     return;  // detiene la función si el dato no es válido
    }

// Si pasó todas las validaciones, agregamos el nombre con push
listaDeAmigos.push(nombre.toLowerCase());

// Actualizamos la lista en pantalla
mostrarAmigos();

// Limpiamos el input (luego de el ingreso del nombre)
document.getElementById("amigo").value = "";  
}



function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";   //Limpiamos la lista antes de agregar los nombres
    // El for recorre el arreglo de amigos
    //Parte el indice en 0; cuando el indice sea menor a la cantidad de la lista de amigos; agregara +1
    for (let i = 0; i < listaDeAmigos.length; i++) {

        //Se crea la variable li, que almacena el elemento li del html
        let li = document.createElement("li");
        //TextContend añade contenido de el elemento actual del indice de lista de amigos a la variable li
        li.textContent = listaDeAmigos[i];
        //A la variable lista (que hace referencia a listaAmigos del html, le añade el lo
        //que este actualmente en la variable li        
        lista.appendChild(li);
    }
}



function sortearAmigo(){

 //Primero la funcion verifica si es que hay amigos en la lista, si es que no hay retorna el alert
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

//Crea la var indice, con Math.random da un numero entre 0 y 1 (ej:0.0001, 0.57, 0.9999990)
//Luego por el orden de () multiplica el reultado de random (ej: 0.57 * 3 = 1.71)
//Match.floor redondea hacia abajo (1.71) → 1)  
let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

//Crea la variable amigoSorteado en donde guarda de mi array (listaDeAmigos) que contiene todos los nombres
//y con el indice (por ej: 1) accede al segundo amigo (porque los arrays empiezan en 0).
let amigoSorteado = listaDeAmigos[indiceAleatorio];

//Trae el elemento con el id resultado del htmlm el innerHTML avisa que va a reemplazar
//en este caso remplaza con el texto "El amigo secreto es: " + la variable "amigoSorteado"
 document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSorteado;

}



