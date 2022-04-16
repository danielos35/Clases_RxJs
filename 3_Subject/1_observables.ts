// CREAR UN OBSERVABLE

    // 1. Importar la libreria................................
        // Cuando se trae directamente del fichero rxjs, es algo que se trae directamente para crear observables

        import {Observable, Observer} from 'rxjs'

        // 2 Formas de crear un observables........................
    
            // a. Utilzar el metodo estatico mediante create, esto suele ser poco común
            const obsUno$ = Observable.create()
    
            // b. Opción 2, mas frecuentada mediante el constructor, podemos defir que va emitir el observable mediante <string>, <boolean>, <obj>
            const obs$ = new Observable<string>(
                // Para que un observable se ejecute, este debe de tener una subscrión
                subsriber =>{
    
                    // .next emite los valores que yo quiero a la personas que están subscritas al observable
                    subsriber.next('HolaMundo1');
                    subsriber.next('HolaMundo2');
                    subsriber.next('HolaMundo3');
                    subsriber.next('HolaMundo4');
    
                    // Cuando se llama al complete, ninguna emisión posterior va a ser notificada al subscriptor
    
                    // Los errores deben de suceder antes de que el subscriber emita el complete
                    
                    const a = undefined; 
                    a.nombre = 'Daniel';
    
                    subsriber.complete();
    
                    subsriber.next('HolaMundo5');
    
                }
            ); 
    
    
        // 3. Subscribirme a un observable.......................... 
        
            // Argumentos de un subscribe
                // 1. Procesar el next
            
            
            // obs$.subscribe(
            //     valorDelNext=>{console.log('next',valorDelNext)},
            //     valorDelError=>{console.warn('error',valorDelError)},
            //     ()=>{console.info('Completado')}
            //     )
        
    
        // Utilización de observer dentro de la subscripción
            // El obsrver es una interface
    
            const observer:Observer<any> ={
    
                // El orden en que se declaren dentro del objeto no afecta su uso
                next:value=> console.log('next ',value),
                error:value=> console.log('error ',value),
                complete:()=> console.log('Completado'),
                
            }
    
            obs$.subscribe(observer)
    
            // obs$.subscribe()
            
    
    
    
    
    
    