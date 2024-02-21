import { asyncScheduler, of, range, scheduled } from "rxjs";

const src1$ = scheduled(range(1, 5), asyncScheduler);

console.log('inicio');
src1$.subscribe(console.log);
console.log('fin');