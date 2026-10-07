Respuesta a la pregunta analítica del ejercicio 1:

La gran ventaja es la reutilización de código y evitar errores. 
Si tuviéramos que registrar 100 computadores manualmente, 
tendríamos que escribir { marca: "...", procesador: "..." } 100 veces, 
lo que toma mucho tiempo y es fácil equivocarse en el nombre de una propiedad. 
Con el molde (función constructora), nos aseguramos de que todos los computadores tengan exactamente la misma estructura siempre, 
ahorrando muchísimas líneas de código.

Respuesta a la pregunta analítica del ejercicio 2:

Porque this (esto) funciona como una indicadora de algo, internamente siempre apunta a la instancia exacta que está ejecutando la acción. Cuando escribimos mascota1.presentar(), automáticamente this se convierte en mascota1. Cuando escribimos mascota2.presentar(), this se convierte en mascota2. Esto nos permite proteger la información para que los datos de un objeto no se crucen por accidente con los de otro.
