import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string = ''
  tituloSubs: Subscription

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tituloSubs = this.loadTitle()
      .subscribe(({ title }) => {
        this.titulo = title
        document.title = `AdminPro - ${title}`
      })
  }
  ngOnDestroy(): void {
    this.tituloSubs.unsubscribe()
  }

  loadTitle() {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }
}
