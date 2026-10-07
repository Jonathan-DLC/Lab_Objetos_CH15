//función constructora para crear objetos Computador
function Computador(marca, procesador, ram, precio) {
  this.marca = marca;
  this.procesador = procesador;
  this.ram = ram;
  this.precio = precio;
}

// instanciamos tres objetos Computador con diferentes valores
let compu1 = new Computador("Lenovo", "Ryzen 5 3500u", "12GB", 1800000);
let compu2 = new Computador("Apple", "M2", "16GB", 5000000);
let compu3 = new Computador("Asus", "Ryzen 7", "16GB", 3200000);

// Imprimimos en consola para verificar
console.log("Computador 1:", compu1);
console.log("Computador 2:", compu2);
console.log("Computador 3:", compu3);