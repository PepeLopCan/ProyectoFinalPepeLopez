import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { MiPerfilComponent } from '../tienda/containers/MiPerfil/mi-perfil/mi-perfil.component';
import { MyProductoComponent } from '../tienda/containers/MyProducto/my-producto/my-producto.component';
import { ShopComponent} from '../tienda/containers/shop/shop/shop.component'
import { ModalEditUsuarioComponent } from '../tienda/containers/MiPerfil/component/modal-edit-usuario/modal-edit-usuario.component';
import { ComponentsModule } from '../components/components.module';
import { CarouselService } from '../shared/services/carousel.service';
import { SharedModuleModule } from '../shared-module.module';
import { TiendaRoutingModule } from './tienda-routing.module';
import { ProductserviceService } from '../shared/services/productos/productservice.service';
import { ShopCartComponent } from './containers/carrito/shop-cart/shop-cart.component';
import { AdminComponent } from './containers/admin/admin/admin.component';
import { ModalUpdateProductComponent } from './containers/admin/components/modal-update-product/modal-update-product.component';
import { ModalcreateProductComponent } from './containers/admin/components/modalcreate-product/modalcreate-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    MiPerfilComponent,
    MyProductoComponent,
    ShopComponent,
    ModalEditUsuarioComponent,
    ShopCartComponent,
    AdminComponent,
    ModalUpdateProductComponent,
    ModalcreateProductComponent
    
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModuleModule,
    TiendaRoutingModule
  ],
  providers: [CarouselService,ProductserviceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TiendaModule { }
