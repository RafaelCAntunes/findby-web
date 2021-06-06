import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './views/auth/authentication/authentication.component';
import { CreateAccountComponent } from './views/auth/create-account/create-account.component';
import { LoginComponent } from './views/auth/login/login.component';
import { CategoriaComponent } from './views/categoria/categoria.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { ManageSegmentCategoryComponent } from './views/manage-segment-category/manage-segment-category.component';
import { ProductComponent } from './views/product/product.component';
import { SegmentoComponent } from './views/segmento/segmento.component';
import { UserApprovalComponent } from './views/user-approval/user-approval.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  children: [
    {path:'', component: DashboardComponent},
    {path:'vitrine', component: ProductComponent}
  ],
 canActivate:[AuthGuard],data:{role:'V'}
},
{
  path:'admin',
  component: HomeComponent,
  children: [
    {path:'', component: UserApprovalComponent},
    {path:'manage', component: ManageSegmentCategoryComponent}
  ],
 canActivate:[AuthGuard],data:{role:'A'}
},
{
  path: '',
  component: AuthenticationComponent,
  children: [
    {path:'', redirectTo: 'login', pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'create-account',component: CreateAccountComponent},
  ],
  
},
{
  path: 'Segmento',
  component: SegmentoComponent
},
{
  path: 'Categoria',
  component: CategoriaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
