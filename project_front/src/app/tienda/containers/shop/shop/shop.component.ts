import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import {MessageService, SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [MessageService]
})


export class ShopComponent implements OnInit {
  sortKey:any;
  product: Product[]=[];

  
    sortOptions: SelectItem[]=[];

    sortOrder: number;

    sortField: string;

    stock:string;

  constructor(private productService: ProductserviceService, private primengConfig: PrimeNGConfig,private messageService: MessageService, private router:Router) {
      this.sortOrder=0;
      this.sortField="";
      this.stock="";
  
   }

 
  ngOnInit() {
    this.getProductos();
    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'},
        {label: 'Categoria', value: 'category'},
        {label: 'Stock', value: 'inventoryStatus'},
        {label: 'Stock bajo', value: '!inventoryStatus'},
        {label: 'Peores Valorados', value: 'rating'},
        {label: 'Mejores Valorados', value: '!rating'},
    ];
    
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

getProductos() {
  this.productService.getProductos().subscribe((resp: any) => {
    this.product = resp.AllProducts;
    console.log(resp);
  });
}

addToCart(product:Product){

}

}
