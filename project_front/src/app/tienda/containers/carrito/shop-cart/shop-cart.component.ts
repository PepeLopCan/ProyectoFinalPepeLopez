import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [MessageService]
})
export class ShopCartComponent implements OnInit {
  value19: number = 0;

  productos:Product[]=[];

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig, private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.productos = this.productService.getTasks();
  
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Producto Comprado'});
}
}
