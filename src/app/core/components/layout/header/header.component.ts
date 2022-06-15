import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showCategory: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.showCategorys();
  }

  showCategorys() {
    let showRouterLinks = ['/checkErrors'];
    console.log(this.router.url, 'fff');

    return this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        showRouterLinks.includes(this.router.url)
          ? (this.showCategory = true)
          : (this.showCategory = false);
      }
    });
  }
}
