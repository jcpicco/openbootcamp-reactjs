import { Observable,  } from "rxjs";


export const getNumbers = new Observable(subscriber => {
    // We emit values
    subscriber.next(1); // Emits 1
    subscriber.next(2); // Emits 2
    subscriber.next(3); // Emits 3
    setTimeout(() => {
    subscriber.next(4); // Emits 4
    subscriber.complete(); // Finally, the observable completes and finishes
    }, 1000);
})