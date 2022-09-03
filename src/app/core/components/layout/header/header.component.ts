import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter, Subscription } from 'rxjs';
import { Roles } from '@shared/Enums/roles';
import { ShareObsService } from '@shared/services/share-obs.service';

interface ILink {
  name: string;
  routerLink: string;
  Active: string;
  role: Roles[];
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
      role: [Roles.User, Roles.Admin, Roles.Editor],
    },
    {
      name: 'Admin',
      routerLink: '/admin',
      Active: 'active-link',
      role: [Roles.Admin],
    },
    {
      name: 'Clients',
      routerLink: '/client',
      Active: 'active-link',
      role: [Roles.Admin],
    },
    {
      name: 'Users',
      routerLink: '/client-user',
      Active: 'active-link',
      role: [Roles.Admin],
    },
    {
      name: 'Certificate',
      routerLink: '/certificate',
      Active: 'active-link',
      role: [Roles.Admin],
    },
    {
      name: 'Questions',
      routerLink: '/question',
      Active: 'active-link',
      role: [Roles.Admin],
    },
    {
      name: 'Projects',
      routerLink: '/project',
      Active: 'active-link',
      role: [Roles.User, Roles.Admin, Roles.Editor],
    },
    {
      name: 'Category',
      routerLink: '/category',
      Active: 'active-link',
      // role: 'Client User',
      role: [Roles.Admin],
    },
  ];

  projectId!: string | number;
  constructor(
    private router: Router,
    private mediaObserver: MediaObserver,
    private activeRoute: ActivatedRoute,
    public shareObsService: ShareObsService
  ) {}

  ngOnInit(): void {
    this.projectId = this.activeRoute.snapshot.queryParamMap.get(
      'projectId'
    ) as string;
    this.checkBreakpoint();
    // this.showCategorys();
  }

  close() {
    this.sidenav.close();
  }

  showCategorys() {
    let showRouterLinks = '/check-errors/list';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.close();
        this.router.url.indexOf(showRouterLinks) > -1
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
