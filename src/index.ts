import { interval } from "rxjs";

const observer = {
  next: (next) => console.log(next),
  complete: () => console.log('Complete')
}

const interval$ = interval(1000);

console.log('Inicio');
// interval$.subscribe(observer);
console.log('Fin');