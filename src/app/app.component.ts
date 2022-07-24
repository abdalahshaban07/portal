import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { LoadingService } from '@core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portal';

  constructor(public authService: AuthService, public loader: LoadingService) {}
}
