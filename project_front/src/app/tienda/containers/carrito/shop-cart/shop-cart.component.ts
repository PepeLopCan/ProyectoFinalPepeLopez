import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class ShopCartComponent implements OnInit {
  value: number = 0;
  total: number = 0;
  final: number = 0;
  productos: Product[] = [];
  array: number[] = [];
  taxes: number = 2.95;
  taxas: number = 0;

  constructor(
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig,
    private productService: ProductserviceService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.productos = this.productService.getProductosCarrito();
    console.log(this.productos);
  }

  deleteCarrito(productos: Product) {
    this.productService.deleteProductoCarrito(productos);
  }

  operacion() {
    this.array = [];
    for (let i in this.productos) {
      this.total = this.productos[i].cantidad! * this.productos[i].precio!;
      this.array.push(this.total);
      console.log(this.array);
    }
    const reducer = (accumulator: any, curr: any) => accumulator + curr;
    this.final = this.array.reduce(reducer);
    this.taxas = this.final + this.taxes;
  }

  confirm(event: any) {
    this.confirmationService.confirm({
      message: `¿Esta seguro de que quiere realizar la compra ?   Precio(${this.taxas})`,
      accept: () => {
        localStorage.setItem('producto', JSON.stringify([]));
        this.router.navigateByUrl('/tienda/shop');
      },
    });
  }
}
