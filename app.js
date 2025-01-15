const edad = prompt("Ingrese su edad");
const edadNumber = parseInt(edad);
    const backgroundColor = prompt (
        "Ingrese un color este será el color de fondo de la página");

function RegistrarHermanos (){
    document.body.style.backgroundColor = backgroundColor;
    const CantidadDeHermanos = parseInt(prompt ("Ingresa la cantidad de hermanos") 
    );
    
    const NombresDeHermanos = []; 
    
    let contador = 0
    while (contador < CantidadDeHermanos) {
        const hermano = prompt ("Ingresa el nombre del hermano " + contador);
        NombresDeHermanos.push (hermano);
        contador++;
    }
        console.log (NombresDeHermanos);
}

function generarColorHex() {
    // Convierte un número decimal (0-16777215) a hexadecimal (000000-FFFFFF)
    const numeroAleatorio = Math.floor(Math.random() * 16777216);
    // Asegura que el color tenga 6 dígitos agregando ceros a la izquierda si es necesario
    const colorHex = `#${numeroAleatorio.toString(16).padStart(6, "0")}`;
    return colorHex;
  }
  
  // Obtiene referencia al botón del juego 2
  const btnGame2 = document.getElementById("btnGame2");
  
  // Agrega el event listener para generar bloques cuando se haga click
  btnGame2.addEventListener("click", generarBloques);
  
  /**
   * Función principal para generar bloques de colores
   * Modifica el título y crea cuadrados con colores aleatorios
   */
  function generarBloques() {
    // Modifica el título de la página
    const title = document.getElementById("title");
    title.textContent = "Hola fui modificado desde JS";
    title.style.fontFamily = "Verdana";
    title.style.color = "green";
  
    // Solicita al usuario la cantidad de cuadrados a generar
    const cantidadDeCuadrados = parseInt(
      prompt("Ingrese la cantidad de bloques")
    );
  
    // Inicializa contador para el bucle de generación
    let contador = 0;
  
    // Obtiene referencia al body para agregar los cuadrados
    const body = document.body;
  
    // Genera los cuadrados según la cantidad especificada
    while (contador < cantidadDeCuadrados) {
      // Crea un nuevo elemento div para el cuadrado
      const cuadrado = document.createElement("div");
      cuadrado.textContent = contador;
  
      // Establece las propiedades de estilo del cuadrado
      cuadrado.style.width = "100px";
      cuadrado.style.height = "100px";
      cuadrado.style.backgroundColor = generarColorHex();
      cuadrado.style.border = "1px solid";
  
      // Agrega el cuadrado al body
      body.appendChild(cuadrado);
      contador++;
    }
  }

// Función para generar un número aleatorio
function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar la elección aleatoria de la computadora
function eleccionComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    const indiceAleatorio = obtenerNumeroAleatorio(0, 2);
    return opciones[indiceAleatorio];
}

// Función para determinar el resultado del juego
function determinarResultado(usuario, computadora) {
    if (usuario === computadora) {
        return "¡Es un empate!";
    }
    if (
        (usuario === "piedra" && computadora === "tijera") ||
        (usuario === "tijera" && computadora === "papel") ||
        (usuario === "papel" && computadora === "piedra")
    ) {
        return "¡Ganaste!";
    } else {
        return "Perdiste, la computadora ganó.";
    }
}

// Lógica principal del juego
function jugarPiedraPapelTijera() {
    const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();

    // Validar entrada del usuario
    if (!["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        alert("Elección no válida. Por favor, elige entre piedra, papel o tijera.");
        return;
    }

    const eleccionCompu = eleccionComputadora();

    // Mostrar las elecciones
    alert(`Elegiste: ${eleccionUsuario}`);
    alert(`La computadora eligió: ${eleccionCompu}`);

    // Determinar y mostrar el resultado
    const resultado = determinarResultado(eleccionUsuario, eleccionCompu);
    alert(resultado);
}

// Ejecutar el juego
jugarPiedraPapelTijera();


if (edadNumber < 18) {
    document.write(
        "<div class='banner'>Recuerda visitar los lugares con un adulto</div>");
}
const carouselImages = document.querySelector('.carousel-images');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = indicators.length;
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentSlide = 0;

        function updateCarousel() {
            carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });

        // Auto-play
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 5000);

