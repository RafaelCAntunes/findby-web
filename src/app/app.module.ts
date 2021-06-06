import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SegmentoComponent } from './views/segmento/segmento.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ElementDialogComponent } from './shared/element-dialog/element-dialog.component';
import { ElementDialogSegmentoComponent } from './shared/element-dialog-segmento/element-dialog-segmento.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ElementDialogCategoriaComponent } from './shared/element-dialog-categoria/element-dialog-categoria.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu'; 
import { HomeModule } from './views/home/home.module';
import { AuthenticationComponent } from './views/auth/authentication/authentication.component';
import { LoginComponent } from './views/auth/login/login.component';
import { CreateAccountComponent } from './views/auth/create-account/create-account.component';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    CreateAccountComponent,
    
    
    
   
    ],
  imports: [
    AppRoutingModule,
    BrowserModule,    
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    HomeModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
