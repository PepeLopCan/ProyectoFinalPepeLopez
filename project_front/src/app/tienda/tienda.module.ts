import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from './home/home/home.component'
import { MiPerfilComponent } from './MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from './MyProducto/my-producto/my-producto.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ModalEditUsuarioComponent } from './MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    MiPerfilComponent,
    MyProductoComponent,
    ShopComponent,
    ModalEditUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TiendaModule { }
