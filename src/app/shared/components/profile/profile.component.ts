import { Roles } from '@shared/Enums/roles';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name!: string;
  Roles = Roles;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.name = this.authService?.user?.Username || 'userName';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
