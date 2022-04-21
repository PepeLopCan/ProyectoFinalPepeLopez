import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiPerfilComponent } from './MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from './MyProducto/my-producto/my-producto.component';
import { ShopComponent } from './shop/shop/shop.component';
import { ModalEditUsuarioComponent } from './MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';
import { TiendaComponent } from './tienda.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    MiPerfilComponent,
    MyProductoComponent,
    ShopComponent,
    ModalEditUsuarioComponent,
    TiendaComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaModule { }
