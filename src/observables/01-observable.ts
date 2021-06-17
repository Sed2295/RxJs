import { Observable, Observer } from 'rxjs';
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:',value),
    error: error => console.warn('error [obs]: ', error),
    complete: ()=> console.info('Completado [obs]')
}

/* version antigua o poco usada 
const obs$ = Observable.create(); */
//creamos un observable que va a emitir puros string por eso las <>
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    //creando un error
    /* const a = undefined;
    a.nombre = 'Alfredo'; */

    subs.complete();
    subs.next('Esto ya no va a aparecer por que se llamo al metodo complete ')
});
/* Forma 1
obs$.subscribe( console.log ) */
//Forma 2 de suscribisrse
/* obs$.subscribe( 
    valor => console.log('next: ',valor),
    error => console.warn('error: ', error),
    () => console.info('Completado')
) */
//Forma 3 de suscribirse  creando un observer
obs$.subscribe( observer );







