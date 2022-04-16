import { Observable, Observer, Subject } from "rxjs";

let observer:Observer<any> = {
    next: valor=> console.log('Next = ', valor),
    error:err=>console.error('Error =',err),
    complete:()=> console.log('completado')
}

const intervalo$ = new Observable<number>(sub =>{
    const intervalID = setInterval(
        ()=>{sub.next(Math.random()),3000
    })
    
    // Se llama caundo se desuscribe del Observable
    return ()=>{clearInterval(intervalID)}
})


// Para que un observable se ejecute debe de existir una subscripción
// const sub1 = intervalo$.subscribe(res=>(console.log('sub1',res)))
// const sub2 = intervalo$.subscribe(res=>(console.log('sub2',res)))


// Para recibir el mismo valor en cualquiera de las subscripciones necesitamos un subject, que es un tipo especial de observable 
    // CARACTERISTICAS
        // 1. El subject posee casteo multiple, lo que quiere decir que muchas subscripciones van a estar sujetas a este mismo subject, distribuyendo la mismo información 

        //2.  Es un observer, lo podemos mandar como argumento en el subscribe
         
        //3. También se pude manejar el next, error y complete 
const subject$ = new Subject()


// Subscribirme mediante un subject 
   let subscripcionSubject =  intervalo$.subscribe(subject$);

// Subscribiendome al subject obtengo los mismos valores en ambos casos

    const sub1 = subject$.subscribe(res=>(console.log('sub1',res)))
    const sub2 = subject$.subscribe(res=>(console.log('sub2',res)))

// Al subject también ser un observer puede ser utilizado en el metodos como el next y el complete 

setTimeout(()=>{
    subject$.next('siguiente subject');
    subject$.complete()
    subscripcionSubject.unsubscribe()
})


// NOTAS

    // Cuando la data es producida por el observable en si mismo es considerado un COLD OBSEVABLE, pero cuando la data es producida fuera del observable es llamado HOT OBSERVABLE

    // Un observable por tanto permite convertir un cold observable en un hot observable

    // Para finalizar completamente las tareas de un subject se debe de llamar el unsubscribe del subject de lo contrario se seguiran ejecutando procesos del observable a pesar de que se muestre el completadom del mismo 
    