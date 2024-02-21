import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('error', error),
  complete: () => console.log('complete')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');
  
  throw new Error('error');

  subs.complete();
  
  subs.next('Hola');
  subs.next('Mundo');
});

// obs$.subscribe(resp => {
//   console.log(resp);
// });

// obs$.subscribe(console.log);

// obs$.subscribe(
//   valor => console.log('next: ', valor),
//   error => console.warn('error: ', error),
//   () => console.info('Complete')
// );

obs$.subscribe(observer);

