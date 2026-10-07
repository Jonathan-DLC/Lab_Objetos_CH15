function Estudiante(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.aprobado = (nota >= 3.0);

    this.mostrarResultados = function() {
     if (this.aprobado) {
        return "El estudiante " + this.nombre + " ha aprobado el curso " + this.curso + " con una nota de " + this.nota + ".";
        } else {
          return "El estudiante " + this.nombre + " ha reprobado el curso " + this.curso + " con una nota de " + this.nota + ".";
        }
     }
}  

let estu1 = new Estudiante("Jonathan", "JavaScript", 2.9);
let estu2 = new Estudiante("Pedro", "Bases de Datos", 4.0);

console.log(estu1.mostrarResultados());
console.log(estu2.mostrarResultados());