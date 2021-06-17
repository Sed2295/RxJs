//range crea una secuencia de numeros con un elemento iniicaial y rango final
import { asyncScheduler, of,range } from 'rxjs';
/* const src$ = of(1,2,3,4,5); */
const src$ = range(1,10,asyncScheduler);
//Es un proceso sincrono pero con asynScheduler lo convertimos en asincrono
console.log('Inicio');
src$.subscribe(valor => console.log(valor))
console.log('Fin')