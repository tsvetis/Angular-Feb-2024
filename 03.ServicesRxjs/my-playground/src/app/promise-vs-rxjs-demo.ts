// PROMISE
// - promises are not lazy, code invokes!
// - can not be canceled

import { interval, map, tap } from 'rxjs';

// - you can subcribe to only 1 value
const p = new Promise((resolve, reject) => {
  console.log('promise invoked!');

  setTimeout(() => {
    resolve(111);
    // reject('Why not?');
  }, 3000);
});

p.then((data) => {
  console.log('from promise ', data);
})
  .then()
  .then()
  .catch((err) => console.error('Error: ', err));

// Promise.resolve(112)
//   .then((data) => data * 10)
//   .then((x) => console.log('from promise 2: ', x));

// sync analogy
[1].map((x) => x * 2);

// Observables
// sync analogy
[1, 2, 3, 4].map((x) => x * 2);

// async example
// const o = new Observable((observer) => {
//   observer.next(200);
//   observer.next(201);
//   observer.next(202);
// });

// o.subscribe((data) => {
//   console.log('from observable: ', data);
// });

// const interval = (intervalValue: number) => {
//   const o = new Observable<number>((observer) => {
//     console.log('from OBSERVER!!!!!');

//     let counter = 0;

//     const timer = setInterval(() => {
//       observer.next(counter++);
//     }, intervalValue);

//     // clear data on destroy
//     return () => {
//       clearInterval(timer);
//     };
//   });

//   return o;
// };

const stream$ = interval(2000)
  .pipe(map((x) => x * 2))
  .pipe(map((x) => x * 10))
  .pipe(tap((x) => console.log(x + ' test123')));

// stream$.subscribe((data) => console.log(data));
setTimeout(() => {
  stream$.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.error('errr: ', error),
    complete: () => console.log('The Stream ahs completed'),
  });
}, 3000);
