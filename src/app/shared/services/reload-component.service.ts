import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReloadComponentService {
  constructor(public router: Router, private route: ActivatedRoute) {}

  // reloadComponent() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.router.navigate(['./'], {
  //     relativeTo: this.route,
  //     queryParamsHandling: 'preserve',
  //     skipLocationChange: true,
  //   });
  // }

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    // //skipLocationChange:true means dont update the url to / when navigating
    // console.log('Current route I am on:', this.router.url);
    const url = self ? this.router.url : urlToNavigateTo;
    // this.router
    //   .navigate(['/'], {
    //     skipLocationChange: true,
    //     queryParamsHandling: 'preserve',
    //   })
    //   .then(() => {
    //     this.router.navigate([`/${url}`], {}).then(() => {
    //       console.log(`After navigation I am on:${this.router.url}`);
    //     });
    //   });
    this.router
      .navigate([`/${url}`], {
        skipLocationChange: true,
        queryParamsHandling: 'preserve',
      })
      .then(() => {
        console.log(`After navigation I am on:${this.router.url}`);
      });
  }

  reloadPage() {
    window.location.reload();
  }
}
