import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter, Subscription } from 'rxjs';

interface ILink {
  name: string;
  routerLink: string;
  Active: string;
  role: string;
}
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

  linkes: ILink[] = [
    {
      name: 'Dashboard',
      routerLink: '/dashboard',
      Active: 'active-link',
      role: 'Admin',
    },
    {
      name: 'Admin',
      routerLink: '/admin',
      Active: 'active-link',
      role: 'Admin',
    },
    {
      name: 'Clients',
      routerLink: '/client',
      Active: 'active-link',
      role: 'Admin',
    },
    {
      name: 'Certificate',
      routerLink: '/certificate',
      Active: 'active-link',
      role: 'Admin',
    },
    {
      name: 'Questions',
      routerLink: '/question',
      Active: 'active-link',
      role: 'Admin',
    },
  ];

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
      '/check-errors/list/documents',
      '/check-errors/list/records',
      '/check-errors/list/solutions',
      '/check-errors/list/configuration',
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
