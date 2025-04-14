
import { Routes } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { NosotrosComponent } from './screens/nosotros/nosotros.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { LoginComponent } from './screens/login/login.component';
import { ApiComponent } from './screens/api/api.component';
import { ApiDetailComponent } from './screens/api-detail/api-detail.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegistroProductComponent } from './screens/registro-product/registro-product.component';
import { VerProductComponent } from './screens/ver-product/ver-product.component';



export const routes: Routes = [
    {path:"home", component: HomeComponent},
    {path:"nosotros", component: NosotrosComponent},
    {path: "api", component: ApiComponent, ...canActivate(()=> redirectUnauthorizedTo(["/login"]))},
    //Ver los detalles:
    {path:"api-detail/:id", component: ApiDetailComponent},
    {path:"login", component: LoginComponent},
    {path:"registro-product", component: RegistroProductComponent},
    { path: 'registro-product/:id', component: RegistroProductComponent },
    {path:"ver-product", component: VerProductComponent},
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"**", component: NotFoundComponent},
];
