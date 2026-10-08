function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.anio = año;
  this.prestado = false;

  // Método para pedir prestado el libro
  this.prestar = function() {
    if (this.prestado === false) {
      this.prestado = true;
      return "Acabas de pedir prestado el libro: " + this.titulo;
    } else {
      return "Lo siento, el libro " + this.titulo + " ya está prestado a alguien más.";
    }
  };

  // Método para devolver el libro
  this.devolver = function() {
    if (this.prestado === true) {
      this.prestado = false;
      return "Gracias por devolver el libro: " + this.titulo;
    } else {
      return "Error: el libro " + this.titulo + " ya estaba aquí, no estaba prestado.";
    }
  };
}

let libro1 = new Libro("Harry Potter y el caliz de fuego", "J. K. Rowling", 2000);

// Probamos qué pasa si ejecutamos las acciones paso a paso:
console.log(libro1.prestar());   // 1. Lo pide prestado con éxito (pasa a true)
console.log(libro1.prestar());   // 2. Intenta volver a pedirlo (marca el error porque ya es true)
console.log(libro1.devolver());  // 3. Lo devuelve con éxito (pasa a false)
console.log(libro1.devolver());  // 4. Intenta devolverlo de nuevo (marca el error porque ya es false)