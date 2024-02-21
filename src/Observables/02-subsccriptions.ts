import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('error', error),
  complete: () => console.log('complete')
}

const interval$ = new Observable<number>(subs => {
  let counter = 0;
  const interval = setInterval(() => {
    subs.next(counter);
    console.log(counter);
    counter++;
  }, 1000);

  return () => { // Está función se llama al ser el unsuscribe
    clearInterval(interval);
    console.log('Intérvalo destruido');
  }
});

const suscription = interval$.subscribe(console.log);
// suscription.unsubscribe();

setTimeout(() => {
  suscription.unsubscribe();
}, 3000);