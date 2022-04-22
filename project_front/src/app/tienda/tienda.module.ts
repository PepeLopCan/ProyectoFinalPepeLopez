import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { MiPerfilComponent } from '../tienda/containers/MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from '../tienda/containers/MyProducto/my-producto/my-producto.component';
import {ShopComponent} from '../tienda/containers/shop/shop/shop.component'
import { ModalEditUsuarioComponent } from '../tienda/containers/MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';
import { ComponentsModule } from '../components/components.module';
import { CarouselService } from '../shared/services/carousel.service';
import { SharedModuleModule } from '../shared-module.module';


@NgModule({
  declarations: [
    HomeComponent,
    MiPerfilComponent,
    MyProductoComponent,
    ShopComponent,
    ModalEditUsuarioComponent
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModuleModule
  ],
  providers: [CarouselService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaModule { }
