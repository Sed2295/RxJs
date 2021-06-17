import { of } from 'rxjs';

//of recorre de manera sincrona los argumentos y lo finaliza

//const obs$ = of(1,2,3,4,5,6);
//const obs$ = of(...[1,2,3,4,5,6]);
const obs$ = of([1,2],{a:1,b:2},function (){},true,Promise.resolve(true));
//const obs$ = of(1,2,3,4,5)
console.log('Inicio del observable')
obs$.subscribe( 
    next => console.log(`next:`,next),
    null,
    () => console.log('Fin del observable') 
)