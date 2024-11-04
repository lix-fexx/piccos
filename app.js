// app.js
// Aplicación simple de saludo

// Función para imprimir un saludo personalizado
function greet(name) {
    return `¡Hola, ${name}! Bienvenido a nuestra aplicación de prueba en GitHub.`;
}

// Obtener el nombre del usuario de los argumentos de la línea de comandos
const args = process.argv.slice(2);
const userName = args[0] || "Usuario";

// Imprimir el saludo en la consola
console.log(greet(userName));
