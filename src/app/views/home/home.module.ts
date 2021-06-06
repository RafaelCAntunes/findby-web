import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from 'src/app/shared/shared.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SegmentoComponent } from '../segmento/segmento.component';
import { CategoriaComponent } from '../categoria/categoria.component';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { ElementDialogSegmentoComponent } from 'src/app/shared/element-dialog-segmento/element-dialog-segmento.component';
import { ElementDialogCategoriaComponent } from 'src/app/shared/element-dialog-categoria/element-dialog-categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from '../product/product.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { UserApprovalComponent } from '../user-approval/user-approval.component';
import { ManageSegmentCategoryComponent } from '../manage-segment-category/manage-segment-category.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    SegmentoComponent,
    CategoriaComponent,
    ElementDialogComponent,
    ElementDialogSegmentoComponent,
    ElementDialogCategoriaComponent,
    UserApprovalComponent,
    ManageSegmentCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTooltipModule
    ]
    
  
})
export class HomeModule { }
