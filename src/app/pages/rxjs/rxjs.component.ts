import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs'
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription

  constructor() {

    /*this.retornaObservable().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('Subs ', valor),
      err => console.log('Error ', err),
      () => console.log('Obs terminado')
    )*/

   this.intervalSubs =  this.retornaInterval()
      .subscribe(
        valor => console.log(valor)
      )

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe()
  }

  retornaInterval(): Observable<any> {
    return interval(500).pipe(
      //take(10),
      map(valor => valor + 1),
      filter(valor => (valor % 2 === 0) ? true : false),

    )
  }

  retornaObservable(): Observable<any> {

    let i = -1
    return new Observable(observer => {

      const intervalo = setInterval(() => {

        i++
        observer.next(i)

        if (i === 3) {
          clearInterval(intervalo)
          observer.complete()
        }

        if (i === 2) {
          i = 0
          observer.error("existe un error")
        }
      }, 1000)

    })
  }

}
