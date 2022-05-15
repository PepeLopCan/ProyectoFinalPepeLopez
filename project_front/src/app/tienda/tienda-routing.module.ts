import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { MiPerfilComponent } from '../tienda/containers/MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from '../tienda/containers/MyProducto/my-producto/my-producto.component';
import{ShopComponent} from '../tienda/containers/shop/shop/shop.component'
import { ModalEditUsuarioComponent } from '../tienda/containers/MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';
import { ShopCartComponent } from './containers/carrito/shop-cart/shop-cart.component';
import { AdminComponent } from './containers/admin/admin/admin.component';
import { ModalcreateProductComponent } from './containers/admin/components/modalcreate-product/modalcreate-product.component';
import { ModalUpdateProductComponent } from './containers/admin/components/modal-update-product/modal-update-product.component';

const routes: Routes = [
  

      { path:'home',component:HomeComponent },
      { path: 'myperfil',component: MiPerfilComponent},
      { path: 'myproduct/:id',component: MyProductoComponent},
      { path: 'shop',component: ShopComponent},
      { path: 'editUser/:id',component: ModalEditUsuarioComponent},
      { path: 'carrito',component: ShopCartComponent},
      { path: 'admin',component: AdminComponent},
      { path: 'createProduct',component: ModalcreateProductComponent} , 
      { path: 'updateProduct/:id',component: ModalUpdateProductComponent}  
    

];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TiendaRoutingModule { }
