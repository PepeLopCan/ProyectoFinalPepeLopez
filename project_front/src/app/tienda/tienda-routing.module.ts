import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { MiPerfilComponent } from '../tienda/containers/MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from '../tienda/containers/MyProducto/my-producto/my-producto.component';
import{ShopComponent} from '../tienda/containers/shop/shop/shop.component'
import { ModalEditUsuarioComponent } from '../tienda/containers/MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';



const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    children:[ 
      { path: 'myperfil',component: MiPerfilComponent},
      { path: 'myproduct/:id',component: MyProductoComponent},
      { path: 'shop',component: ShopComponent},
      { path: 'editUser/:id',component: ModalEditUsuarioComponent}    
    ]
  }
 

]
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TiendaRoutingModule { }
