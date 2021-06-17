import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}
const intervalo$ = new Observable<number>(suscriber => {
    let count = 0;
    const interval = setInterval( ()=> {
        count ++;
        suscriber.next(count);
    }, 1000)
    setTimeout( () => {
        suscriber.complete();
    },5000)
    //codigo para evitar fugas de memoria ya que unsubscribe no rompe el proceso
    //ya que el observable se sigue ejecutando por eso en el return lo destruimos
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe( observer )
const subs2 = intervalo$.subscribe( observer )
const subs3 = intervalo$.subscribe( observer )
//add nos sirve para agrupar una suscripcion para despues terminar solo una como en la forma 2
subs1.add( subs2)
    .add( subs3)
//Termino la subscripcion a los 5 segundos
setTimeout( () => {
    //Forma 1 de unsuscribe
    /* subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe() */
    //Forma 2 de unsubscribe
    subs1.unsubscribe();

    console.log('completado timeout')
},5000);