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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider'; 

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
  MatDividerModule
];

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, MaterialComponents, FlexLayoutModule],
  exports: [MaterialComponents, AvatarComponent, FlexLayoutModule],
})
export class SharedModule {}
