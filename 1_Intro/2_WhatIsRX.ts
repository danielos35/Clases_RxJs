// QUE ES REACTIVE

    // Es una API para programación asincrona usando observables

    // Segun los creadores es el conglomerado de las mejores ideas del patron Observer, patron iterador y programación funcional. 

        //Patron Observer.......

            // NOTIFICA CUANDO SUCEDEN CAMBIOS DE UNO A MUCHOS

            // Es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notica este cambio a todos los dependientes, como lo hace un semaforo (observable), que cuando cambia los autos (subscribes)realizan una acción y se puede desuscribir, sin embargo el semaforo seguiria emitiendo cambios (realizando acciones)
            

        // Patron Interador

            // TODAS LAS OPERACIONES QUE NECESITO PARA EJECUTAR TAREAS DE MANERA SECUENCIAL 

            // Define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.
                // Ejemplo primero(), siguiente(), hay mas(), elementoActual

        // Programación funcional 
            
            
            // TENER FUNCIONES CON TAREAS ESPECÍFICAS QUE RECIBAN ARGUMENTOS Y NO MUTEN LA INFORMACIÓN 
            
            // crar un conjunto de funciones que tengan un objetivo expecifico, es decir, si tengo una función que reciba 'A, y retorna 'A+1', siempre que llame esa función retornará 'A+1' SIN EFECTOS SECUNDARIOS, SIN MUTAR DATA