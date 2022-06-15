import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const MaterialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatMenuModule,
  MatBadgeModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    AvatarComponent,
    CustomTableComponent,
    ActionButtonsComponent,
    ProfileComponent,
    WelcomeComponent,
  ],
  imports: [CommonModule, MaterialComponents],
  exports: [
    MaterialComponents,
    AvatarComponent,
    CustomTableComponent,
    ProfileComponent,
    WelcomeComponent,
  ],
})
export class SharedModule {}
