import { of,from, Observer } from "rxjs";
/* 
    of = toma argumentos y genera una secuencia de valores
    from = crea un observable en base a un arreglo, promise,iterable,observable
 */
const observer:Observer<any> = {
    next: valor => console.log('next:',valor),
    error: error => console.warn('error [obs]: ', error),
    complete : () => console.log('complete') 
}
//const source$ = from([1,2,3,4,5])
//const source$ = of(...[1,2,3,4,5])
//const source$ = from('Fernando')
const source$ = from( fetch('https://api.github.com/users/klerith') )
/* nos suscribimos para hacer uso de async y await con fetch

source$.subscribe(async(resp) => {
    const body = await resp.json();
    console.log(body);
})*/

//source$.subscribe( observer );
//Funcion generadora de js
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const miIterable = miGenerador();
/* Forma convencional
for(let id of miIterable){
    console.log(id);
} */
from( miIterable ).subscribe( observer );