import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showCategory: boolean = false;
  show: boolean = false;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  private mediaSubscription!: Subscription;
  constructor(private router: Router, private mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.checkBreakpoint();
    this.showCategorys();
  }

  close() {
    this.sidenav.close();
  }

  showCategorys() {
    let showRouterLinks = [
      '/check-errors',
      '/check-errors/view?list=documents',
      '/check-errors/view?list=records',
      '/check-errors/view?list=solutions',
      '/check-errors/view?list=configuration',
    ];
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.close();
        showRouterLinks.includes(this.router.url)
          ? (this.showCategory = true)
          : (this.showCategory = false);
      }
    });
  }

  checkBreakpoint() {
    this.mediaSubscription = this.mediaObserver
      .asObservable()
      .pipe(filter((change: MediaChange[]) => change[0].mqAlias === 'md'))
      .subscribe(() => {
        this.close();
      });
  }

  ngOnDestroy(): void {
    this.mediaSubscription && this.mediaSubscription.unsubscribe();
  }
}
