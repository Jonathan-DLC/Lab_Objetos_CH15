function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.peso = peso;

    this.presentar = function() {
    return "Hola, mi nombre es " + this.nombre + ", soy un "
     + this.especie + " y peso " + this.peso + " kilos.";
    };
}

let mascota1 = new Mascota("Coquito", "Perro", 3, 10);
let mascota2 = new Mascota("Yuyu", "Gato", 2, 5);
let mascota3 = new Mascota("lucas", "Loro", 1, 0.5);


console.log(mascota1.presentar());
console.log(mascota2.presentar());
console.log(mascota3.presentar());