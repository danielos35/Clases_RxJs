import { Observer, Observable } from 'rxjs';

// Crear observable

let observable$ = new Observable<string>(
    sub=>{
        sub.next('Hola desde el next'),
        sub.next('Hola 2');
        sub.complete()
        return ()=> console.log('devolución de observable');
        
    }
)

// Crear observer
let observer:Observer<any> = {
    next: valor=> console.log('Next = ', valor),
    error:err=>console.error('Error =',err),
    complete:()=> console.log('completado')
}


// Subscribirme a un Observable
let sub1 = observable$.subscribe(observer); 
let sub2 = observable$.subscribe(observer);
let sub3 = observable$.subscribe(observer); 


// Para encadenar operadores podemos usar el operador add
sub1.add(sub2).add(sub3)

sub1.unsubscribe()


