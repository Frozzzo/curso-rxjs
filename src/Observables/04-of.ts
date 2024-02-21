
import { of } from "rxjs";

const obs$ = of(1,2,3,4,5,6);

console.log('Inicio del obs$');

obs$.subscribe({
    next: (next) => console.log({next}),
    complete: () => console.log('Se ha completado la secuencia')
  }
);

console.log('Se ha completado la secuencia del obs$');