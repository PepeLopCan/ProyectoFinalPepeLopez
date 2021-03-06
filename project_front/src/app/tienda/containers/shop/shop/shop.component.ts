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
        {label: 'Precio Alto a Barato', value: '!precio'},
        {label: 'Precio Barato a Alto', value: 'precio'},
        {label: 'Categoria', value: 'categoria'},
        {label: 'Stock', value: 'inventario'},
        {label: 'Stock bajo', value: '!inventario'},
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


getProductos() {
  this.productService.getProductos().subscribe((resp: any) => {
    this.product = resp.AllProducts;
    console.log(resp);
  });
}

addCarrito(product:Product){
  this.productService.addProductosCarrito(product)
  this.messageService.add({severity:'info', summary: 'Info', detail: 'Añadido al carrito'});
}

}
