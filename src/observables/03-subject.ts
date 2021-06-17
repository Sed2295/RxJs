import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}
const intervalo$ = new Observable<number>(subs => {
    //COLD OBSERVABLE
    const intervalID = setInterval( () => {
        subs.next(Math.random() )
    },1000)

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo detenido')
    }
})

/* 
    caracteristicas de subject
    1.- casteo multiple
    2.- tambien es un observer
    3.- Next, error y complete
 */
//de esta manera en subs1 y subs2 recibimos lo mismo para eso estamos ocupando el subject
//en consola
//subs1 0.5129088874030288
//subs2 0.5129088874030288
const subject$ = new Subject();
const subscripcion = intervalo$.subscribe( subject$ )

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {
    //HOT OBSERVABLE
    subject$.next(10);
    subject$.complete();
    subscripcion.unsubscribe();
},3500)