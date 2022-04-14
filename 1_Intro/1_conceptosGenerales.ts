// RXJS 

    //1. ¿Por qué usar extensiones reactivas?..................
        
        // a. "Porque todos queremos tener información en tiempo real".

        // b. Ultimos twits, precios, juegos online, chats.

        // c. Hacer peticiones a la red y seguir interactuando y actualizando la interface de usuario para seguir haciendo cambios dinamicos en tiempo real sin que se pierda rendimiento

        
    // 2. ¿Cuando usar extensiones reactivas?

        // a. En eventos en la interfaz de usuario.

        // b. Cuando es necesario notificar sobre cambios en un objeto o varios objetos.

        // c. En comunicación por sockets.

        // d. Cuando necesitamos trabajar con flujos de información, stream de datos

    // PIEZAS FUNDAMENTALES DE LA PROGRAMACIÓN REACTIVA

        // a. Observables....................................... 
            // Es la pieza fundamental de las extensiones reactivas.

            // Son la fuente información.

            // Puede emitir multiples valores, solo uno o ninguno.

            // Pueden emtir errores

            // Pueden ser infinitos o finitos (en caso de ser finitos ellos en si mismos pueden concretarsen)
            
            // Pueden ser síncronos o asíncronos (uno de sus fuertes es trabajar de manera asincrona)

        
        // b. Subscribes.........................................

            // Se subscriben a un observable, es decir, estan pendientes de lo que realiza el observable

            // Consumen/observan la data que proviene del observable 

            // Pueden recibir los errores y eventos del observable

            // Desconocen todo lo que se encuentra detrás del observable
                // Desconocen si la información viene filtrada, transformada, de otra fuente, por donde pasó etc

            
        // c. Operadores (Operators)...........................

            // Son la segunda pieza fundamental de las extensiones reactivas 

            // Son usados para transformar los observables (map, group, scan), 

            // Son usados para filtrar observables (filter, distinct, skip, debounce)

            // Usados para combinar observables

            // Utilizados para crear nuevos observables 

    // BENEFICIOS DE LA PROGRAMACIÓN REACTIVA 

        // a. Evitar el CallBack hell (call backs anidados).

        // b. trabajar de forma simple tareas sincrónicas y asíncronas.

        // c. Uso de operadores para reducir y simplificar el trabajo, ayuda a mantener el codigo.

        // d. Es fácil tranformar los flujos (stream) de información en lo que nosotros necesitemos. 

        // e. Codigo mas limpio y facil de leer. 

        // f. Facil de implementar

        // g. Facil anexar procedimientos sin alterar el resultado final





    
// NOTAS

    // a Acimut, norte magnetico de la tierra