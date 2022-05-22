import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService, PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [ConfirmationService,MessageService]
  
})
export class ShopCartComponent implements OnInit {

  value:any;
  productos:Product[]=[];

  constructor(private router:Router,private confirmationService: ConfirmationService,private messageService: MessageService, private primengConfig: PrimeNGConfig, private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.productos = this.productService.getTasks();
    console.log(this.productos);
    
  }

  lado = 1;

  cambiaLado(valor:any) {
    this.lado = valor++;
  }
  

  /*  validateInput( event:any, number:number){
     const qty = +event.target.value;
     if (qty < 1) {
       event.target.value = this.productos[number].cantidad;
       return;
     }
     this.QtyUpdated(qty, number)
   }

   private QtyUpdated(qty:number, i:number){
     this.productos[i].cantidad = qty;

     this.productService.setCarritoData(this.productos);
   } */

  deleteCarrito(productos:Product){
     this.productService.deleteTask(productos);
   }


 

}
