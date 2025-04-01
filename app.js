// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];       //lista para almacenar nombres
let numeroMaximoRegistros = 100;


// Agrega un evento para detectar la tecla Enter
document.getElementById("amigo").addEventListener("keyup", (event) => {
    if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
        agregarAmigo(); // Llama a la función para agregar el amigo
    }
});

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();             //Registro del nombre

    if (nombre === "") {                                    //Verifica que exista un nombre
        mostrarMensaje ("Por favor, inserte un nombre");
        return;
    } else if (listaAmigos.length === numeroMaximoRegistros) {                   //Valida un maximo de registros
        mostrarMensaje ("Alcanzaste el número máximo de registros");
        return;
    } else {
        listaAmigos.push(nombre); //Añadimos el nombre a la lista
        inputAmigo.value = "";
        actualizarLista();        
    }
}

function actualizarLista() {
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = "";                               //Limpia la lista

    for (let i=0; i<listaAmigos.length; i++) {                  //Contador
        const li=document.createElement("li");
        li.textContent = `${i+1}. ${listaAmigos[i]}`;           //Muestra nuestra lista de nombres
        ulListaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        mostrarMensaje ("Por favor, ingresa al menos 2 nombres");
        return;
    }   if (listaAmigos.length < 2){
        mostrarMensaje ("Es necesario ingresar 2 nombres para realizar el sorteo.");
        return;
    }
            const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            const amigoSorteado = listaAmigos[indiceAleatorio];
            const ulResultado = document.getElementById("resultado");
            ulResultado.innerHTML = "";                             //Limpia la lista

            const li = document.createElement("li");
            li.textContent = `🎉El amigo sorteado es: ${amigoSorteado}🎉`;
            ulResultado.appendChild(li);
}

function reiniciarJuego() {
    listaAmigos.length=0;    //Limpiar lista de amigos
    mostrarMensaje ("Juego Reiniciado");

    const ulListaAmigos = document.getElementById("listaAmigos");
    const ulResultado = document.getElementById("resultado");

    ulListaAmigos.innerHTML = ""; // Limpia la lista de amigos visualmente
    ulResultado.innerHTML = "";  // Limpia los resultados visuales

}

function mostrarMensaje(texto, duracion = 3000) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
    mensajeDiv.style.display = "block";

    setTimeout(() => {
        mensajeDiv.style.display = "none";
    }, duracion);
}

function ocultarMensaje() {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.style.display = "none";
}

const botonAyuda = document.getElementById("botonAyuda");
const modalAyuda = document.getElementById("modalAyuda");
const cerrarModal = document.getElementById("cerrarModal");

botonAyuda.addEventListener("click", () => {
    modalAyuda.style.display = "flex";
});

cerrarModal.addEventListener("click", () => {
    modalAyuda.style.display = "none";
});

window.addEventListener("click", (event) => {
    if(event.target === modalAyuda) {
        modalAyuda.style.display="none";
    }
});