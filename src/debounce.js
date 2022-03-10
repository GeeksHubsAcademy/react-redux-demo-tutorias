
import { debounce , delay } from "https://deno.land/std@0.128.0/async/mod.ts";


const sayHi = (i) => {
    console.log('hola ', i);
    console.timeEnd();
};


const sayHiDebounced = debounce(sayHi, 1000);

console.log('start!');
console.time();
// sayHi()
// sayHi()
// sayHi()
sayHiDebounced(1);
sayHiDebounced(3);

// for (let index = 0; index < 1e10; index++) {

// }
// console.timeEnd();