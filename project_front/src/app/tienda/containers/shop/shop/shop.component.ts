import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/shared/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import {MessageService, SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [MessageService]
})


export class ShopComponent implements OnInit {
  sortKey:any;
  products: Product[]=[];

  
    sortOptions: SelectItem[]=[];

    sortOrder: number;

    sortField: string;



  constructor(private productService: ProductserviceService, private primengConfig: PrimeNGConfig,private messageService: MessageService) {
      this.sortOrder=0;
      this.sortField="";
   }

 
  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.primengConfig.ripple = true;
    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
}

onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }  
}
showInfo() {
  this.messageService.add({severity:'info', summary: 'Info', detail: 'Añadido al carrito'});
}
}
