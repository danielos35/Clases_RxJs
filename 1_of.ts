// import {of} from 'rxjs'

// OF
    //1. Nos permite crear observables en base a un listado de elementos.
    //2. Emite los valores de manera sincrona emitidos en orden 

// const obs$ = of(1,2,3,4,5); 
    
    // 3. Los valores dentro de la función deben de estar separados por comas ','

// const obs$ = of([1,2,3,4,5]); 

    // 4. Enviar objetos de distintos tipos
// const obs$ = of([1,2,3,4,5], {a:1,b:2}, 'HolaMundo', function(){}); 


    // 5. Podemos tipar usando <> el tipo de dato que se emitirá desde el observable
const obs$ = of<string>('HolaMundo'); 
 
    //1.  El valor se empazará a ejecutar hasta tenga una subscripción
    

    console.log('Inicio');
    obs$.subscribe(
        next=>console.log(next,'next'), 
        null, 
        () => console.log('Secuencia terminada')
    ); 
    console.log('Final');
    
