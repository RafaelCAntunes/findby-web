import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import { ChartCardComponent } from './widgets/chart-card/chart-card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { ProductCardComponent } from './widgets/product-card/product-card.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ElementDialogNewProductComponent } from './element-dialog-new-product/element-dialog-new-product.component';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ElementDialogConfirmComponent } from './element-dialog-confirm/element-dialog-confirm.component';
import { ElementDialogDiscountComponent } from './element-dialog-discount/element-dialog-discount.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    ChartCardComponent,
    PieComponent,
    ProductCardComponent,
    ElementDialogNewProductComponent,
    ElementDialogConfirmComponent,
    ElementDialogDiscountComponent
  ],
  imports: [
    CommonModule,
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
    RouterModule,
    BrowserAnimationsModule,
    MatRippleModule,
    HighchartsChartModule,
    MatTooltipModule,
    MatSelectModule,
    MatGridListModule,
    MaterialFileInputModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    ChartCardComponent,
    PieComponent,
    ProductCardComponent,
    ElementDialogNewProductComponent,
    ElementDialogConfirmComponent
  ]
})
export class SharedModule { }
