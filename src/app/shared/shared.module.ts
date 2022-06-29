import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

// Components
import { AvatarComponent } from './components/avatar/avatar.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { QuestionComponent } from './components/question/question.component';

//
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


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
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatChipsModule,
  MatSelectModule,
];

@NgModule({
  declarations: [
    AvatarComponent,
    CustomTableComponent,
    ActionButtonsComponent,
    ProfileComponent,
    CategoryCardComponent,
    QuestionComponent,
    DynamicFormFieldComponent,
    PaginatorComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialComponents,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    RouterModule,
    MaterialComponents,
    AvatarComponent,
    CustomTableComponent,
    ProfileComponent,
    CategoryCardComponent,
    QuestionComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    DynamicFormFieldComponent,
  ],
})
export class SharedModule {}
