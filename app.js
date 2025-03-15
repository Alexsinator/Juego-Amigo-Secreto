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
        actualizarLista();        
    }
}

function actualizarLista() {
    const ulListaAmigos = documen.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = "";                               //Limpia la lista

    for (let i=0; i<listaAmigos.length; i++) {                  //Contador
        const li=document.createElement("li");

    }
}

function sortearAmigo() {
    if (listaAmigos.length === "") {
        alert ("No hay nombres en la lista de amigos. Ingresa al menos 2 nombres.")

    }  else {
            const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            const amigoSorteado = listaAmigos[indiceAleatorio];
            const ulResultado = document.getElementById(resultado);
            ulResultado.innerHTML = "";                             //Limpia la lista

            const li = document.getElementById("li");
            li.textContent = ´El amigo sorteado es: ${amigoSorteado}´;
            ulResultado.appendChild(li);
    }
}