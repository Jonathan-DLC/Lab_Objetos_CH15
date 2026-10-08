Respuesta a la pregunta analítica del ejercicio 1: ¿Qué ventaja técnica tiene crear un molde en lugar de escribir un objeto literal individualmente para cada computador?

La gran ventaja es la reutilización de código y evitar errores. 
Si tuviéramos que registrar 100 computadores manualmente, 
tendríamos que escribir { marca: "...", procesador: "..." } 100 veces, 
lo que toma mucho tiempo y es fácil equivocarse en el nombre de una propiedad. 
Con el molde (función constructora), nos aseguramos de que todos los computadores tengan exactamente la misma estructura siempre, 
ahorrando muchísimas líneas de código.

Respuesta a la pregunta analítica del ejercicio 2: ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

Porque this (esto) funciona como una indicadora de algo, internamente siempre apunta a la instancia exacta que está ejecutando la acción. Cuando escribimos mascota1.presentar(), automáticamente this se convierte en mascota1. Cuando escribimos mascota2.presentar(), this se convierte en mascota2. Esto nos permite proteger la información para que los datos de un objeto no se crucen por accidente con los de otro.

Respuesta a la pregunta analítica del ejercicio 3: ¿Qué ventaja le ves a crear un cálculo automático (como el estado aprobado o no) en lugar de pasarlo manualmente al crear el objeto?

La mayor ventaja es evitar errores humanos e inconsistencias. Si nosotros pasáramos el dato manualmente en los paréntesis, alguien podría equivocarse al crear el objeto y escribir new Estudiante("Juan", "React", 1.0, true) (diciendo que aprobó cuando en realidad tiene 1.0). Al hacer que el objeto calcule su propio estado basado en reglas estrictas (nota >= 3.0), garantizamos que la información siempre sea coherente.

Respuesta a la pregunta analítica del ejercicio 4: ¿Qué ocurre si el libro ya estaba prestado y alguien intenta prestarlo nuevamente?

Si el libro ya estaba prestado, el sistema simplemente te dice que no se puede. Esto funciona gracias a que tenemos una variable (this.prestado) que nos dice su situación actual. Al intentar pedirlo, el if revisa esa variable. Como ve que el valor es true (ya prestado), ignora la orden de prestarlo y en su lugar lanza una alerta. Así evitamos desórdenes en el inventario.

Respuesta a la pregunta analítica del ejercicio 5: ¿Qué ventaja tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?

La gran ventaja es que vuelve al programa dinámico y reutilizable. Si escribimos los datos directamente en el código o hardcodear, el programa está "congelado" y siempre creará los mismos 3 vehículos.