import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
}
//Interval es un proceso asincrono
/* const interval$ = interval(1000);
console.log('Inicio')
interval$.subscribe(observer);
console.log('Fin') */
//timer se completa solo
const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds()  + 5 )
//Timer nos podria servir para disparar una notificacion o una opcion en determinado tiempo
const interval$ = timer(hoyEn5);
interval$.subscribe(observer);