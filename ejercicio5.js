//importamos la librería prompt-sync
const prompt = require('prompt-sync')();

function Vehiculo(marca, modelo, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  
  // Método para modificar un dato interno en este caso el color del auto.
  this.cambiarColor = function(nuevoColor) {
    this.color = nuevoColor; // Actualizamos el estado
    return "¡Listo! El " + this.marca + " ahora es de color " + this.color;
  };
}

// Le pedimos los datos al usuario para el Auto 1
console.log("--- REGISTRO DEL VEHÍCULO 1 ---");
let marca1 = prompt("Ingresa la marca: ");
let modelo1 = prompt("Ingresa el modelo: ");
let color1 = prompt("Ingresa el color: ");
let auto1 = new Vehiculo(marca1, modelo1, color1);

// Le pedimos los datos para el Auto 2
console.log("\n--- REGISTRO DEL VEHÍCULO 2 ---");
let marca2 = prompt("Ingresa la marca: ");
let modelo2 = prompt("Ingresa el modelo: ");
let color2 = prompt("Ingresa el color: ");
let auto2 = new Vehiculo(marca2, modelo2, color2);

// Le pedimos los datos para el Auto 3
console.log("\n--- REGISTRO DEL VEHÍCULO 3 ---");
let marca3 = prompt("Ingresa la marca: ");
let modelo3 = prompt("Ingresa el modelo: ");
let color3 = prompt("Ingresa el color: ");
let auto3 = new Vehiculo(marca3, modelo3, color3);

// le cambiamos el color a los 3 autos con los metodos
console.log("\n=== LLEVANDO LOS AUTOS AL TALLER DE PINTURA ===");
console.log(auto1.cambiarColor("Rojo Fuego"));
console.log(auto2.cambiarColor("Azul Metálico"));
console.log(auto3.cambiarColor("Negro Mate"));