import { fromEvent } from "rxjs";

// Eventos del DOM

const src1$ = fromEvent(document, 'click');
const src2$ = fromEvent(document, 'keyup');

const observer = {
  next: (next) => console.log({next})
}

src1$.subscribe(observer)
src2$.subscribe(observer)