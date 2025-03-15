// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];       //lista para almacenar nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();             //Registro del nombre

    if (nombre === "") {                                    //Verifica que exista un nombre
        alert ("Por favor, inserte un nombre");
        return;
    } else if (listaAmigos.length === 10) {                   //Valida un maximo de registros
        alert ("Alcanzaste el número máximo de registros");
        return;
    } else {
        listaAmigos.push(nombre); //Añadimos el nombre a la lista
        inputAmigo.value = "";        
    }
}

