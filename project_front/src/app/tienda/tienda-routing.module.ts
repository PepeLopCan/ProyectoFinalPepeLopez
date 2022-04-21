import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MiPerfilComponent } from './MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from './MyProducto/my-producto/my-producto.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ModalEditUsuarioComponent } from './MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';
import { TiendaComponent } from './tienda.component';


const routes: Routes = [
  {
    path:'tienda',component:TiendaComponent,
    children:[ 
      { path: '', component:TiendaComponent,data: { titulo: 'Tienda' } },
      { path: 'home',component: HomeComponent},
      { path: 'myperfil',component: MiPerfilComponent},
      { path: 'myproduct/:id',component: MyProductoComponent},
      { path: 'shop',component: ShopComponent},
      { path: 'editUser/:id',component: ModalEditUsuarioComponent},

      { path: '',   redirectTo: 'home', pathMatch: 'full' },
    ]
  }
 

]
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TiendaRoutingModule { }
