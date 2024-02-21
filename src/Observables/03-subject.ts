import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next', value),
  error: error => console.warn('error', error),
  complete: () => console.log('complete')
}

const intervalo$ = new Observable<number>(subs => {

  const interval = setInterval(
    () => subs.next( Math.random() ), 1000
  );

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  }
});


/**
 * 1 - Casteo múltiple, envía a todos sus suscriptores el mismo valor
 * 2 - También es un observer
 * 3 - Maneja Next, Error y Complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(value => console.log({subs1: value}));
// const subs2 = intervalo$.subscribe(value => console.log({subs2: value}));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

/**
 * Hot Observable
 */
setTimeout(() => {
  subject$.next(10); // Esto permite insertar en el flujo de información del observable un valor
  subject$.complete();
  subscription.unsubscribe();
}, 3500);