// Cambiar fondo en tiempo real
const userColor = prompt("Escoge el color que prefieras para el fondo de la página?");
document.body.style.backgroundColor = userColor || "lightblue";

// Mostrar resultados en el área de juego
const gameArea = document.getElementById("game-area");

// Función Hermanos
function hermanos() {
    gameArea.innerHTML = "";
    const cantidad = parseInt(prompt("¿Cuántos hermanos tienes?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        gameArea.innerHTML = "<p>Por favor, ingresa un número válido mayor que 0.</p>";
        return;
    }

    const ul = document.createElement("ul");
    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt(`Ingresa el nombre de tu hermano #${i + 1}:`);
        const li = document.createElement("li");
        li.textContent = nombre || "Nombre no proporcionado";
        ul.appendChild(li);
    }
    gameArea.appendChild(ul);
}

// Función Bloques
function bloques() {
    gameArea.innerHTML = "";
    const cantidad = parseInt(prompt("¿Cuántos bloques deseas generar?"));
    if (isNaN(cantidad) || cantidad <= 0) {
        gameArea.innerHTML = "<p>Por favor, ingresa un número válido mayor que 0.</p>";
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        const bloque = document.createElement("div");
        bloque.style.width = "100px";
        bloque.style.height = "100px";
        bloque.style.backgroundColor = generarColorHex();
        bloque.style.margin = "10px";
        bloque.style.display = "inline-block";
        gameArea.appendChild(bloque);
    }
}

// Limpiar bloques
function limpiarGameArea() {
    gameArea.innerHTML = "";
}

// Función Yanquenpo
function yanquenpo() {
    gameArea.innerHTML = "";
    const usuario = prompt("Elige una opción: piedra, papel o tijera").toLowerCase();
    const computadora = generarOpcionAleatoria();

    if (!["piedra", "papel", "tijera"].includes(usuario)) {
        gameArea.innerHTML = "<p>Por favor, elige una opción válida (piedra, papel o tijera).</p>";
        return;
    }

    const resultado = document.createElement("p");
    if (usuario === computadora) {
        resultado.textContent = `Empate: ambos eligieron ${usuario}.`;
        resultado.style.color = "gray";
    } else if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "tijera" && computadora === "papel") ||
        (usuario === "papel" && computadora === "piedra")
    ) {
        resultado.textContent = `¡Ganaste! Tú elegiste ${usuario} y la computadora eligió ${computadora}.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `¡Perdiste! Tú elegiste ${usuario} y la computadora eligió ${computadora}.`;
        resultado.style.color = "red";
    }
    gameArea.appendChild(resultado);
}

// Eventos
document.querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", () => {
        if (index === 0) hermanos();
        else if (index === 1) bloques();
        else if (index === 2) yanquenpo();
    });
});

document.getElementById("btn-inicio").addEventListener("click", () => {
    location.href = "./index.html";
});

// Generar colores aleatorios
function generarColorHex() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

// Generar opción aleatoria
function generarOpcionAleatoria() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}
