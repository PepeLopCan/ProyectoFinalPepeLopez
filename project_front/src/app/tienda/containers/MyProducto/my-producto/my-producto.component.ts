import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-my-producto',
  templateUrl: './my-producto.component.html',
  styleUrls: ['./my-producto.component.css'],
  providers: [MessageService]
})
export class MyProductoComponent implements OnInit {
  value19: number = 0;
  producto = new Product()
  val3:number
  id:any;
  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService, private productService: ProductserviceService, private route: ActivatedRoute ) {
    this.val3 =3;
   }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
   this.getProducto()

;}
      
  showInfo() {
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Añadido al carrito'});
  }

  getProducto(){
    this.productService.getProducto(this.id).subscribe((resp: any)=>{
      this.producto=resp.miProducto;
      console.log(this.producto);
    })
  }
  addCarrito(product:Product){
    this.productService.addProductosCarrito(product)
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Añadido al carrito'});
  }
}
