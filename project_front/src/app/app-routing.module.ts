import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthRoutingModule } from './auth/auth-routing.module';
import { TiendaRoutingModule } from './tienda/tienda-routing.module';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    TiendaRoutingModule,
    AuthRoutingModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
