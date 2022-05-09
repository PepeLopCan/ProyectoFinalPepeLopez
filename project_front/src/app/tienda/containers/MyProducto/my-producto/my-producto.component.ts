import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-my-producto',
  templateUrl: './my-producto.component.html',
  styleUrls: ['./my-producto.component.css'],
  providers: [MessageService]
})
export class MyProductoComponent implements OnInit {
  value19: number = 0;
  producto:Product[]=[];
  val3:number
  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService, private productService: ProductserviceService, ) {
    this.val3 =3;
   }

  ngOnInit(): void {
  this.getTask
  }
  showInfo() {
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Añadido al carrito'});
  }

  getTask(id:string){
    this.productService.getProducto(id).subscribe((resp: any)=>{
      this.producto=resp.miProducto;
      console.log(resp);
    })
  }


}
