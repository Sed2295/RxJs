import { asyncScheduler } from 'rxjs';

//setTimeOut ( () => {},3000);
//setInterval ( () => {},3000);
const saludar = () => console.log('Hola Mundo');
const saludar2 = (nombre:string) => console.log(`Hola ${nombre}`);
const saludar3 = (obj) => console.log(`Hola ${obj.nombre} ${obj.apellido}`);
//SIMULAMOS EL FUNCIONAMIENTO DE UN SET TIMEOUT

//Primer argumento la funcion que debemos ejecutar y el segundo argumento 
//es el tiempo en el que deseamos ejecutar el proceso

//asyncScheduler.schedule( saludar, 2000 );
//asyncScheduler.schedule( saludar2, 2000, 'Alfredo' );
//asyncScheduler.schedule( saludar3, 2000, {nombre:'Alfredo',apellido:'Cabrera'} );

//No puede ser un arrow function para simular un set interval
//los argumentos que recibe es una funcion normal despues el tiempo y despues el state
//SIMULAMOS UN SET INTERVAL
const subs = asyncScheduler.schedule(function(state){
    console.log('state', state)
    this.schedule(state + 1, 1000);
},1000,0)
//Forma 1 de quitar la subscripcion con setTimeout
/* setTimeout( () => {
    subs.unsubscribe();
},6000) */
//Forma 2 de quitar la subscripcion con asyncScheduler

asyncScheduler.schedule(() => subs.unsubscribe(),6000);