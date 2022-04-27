import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
  providers: [MessageService]
})
export class ShopCartComponent implements OnInit {
  value19: number = 0;
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Producto Comprado'});
}
}
