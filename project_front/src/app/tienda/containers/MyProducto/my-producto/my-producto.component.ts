import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-my-producto',
  templateUrl: './my-producto.component.html',
  styleUrls: ['./my-producto.component.css'],
  providers: [MessageService]
})
export class MyProductoComponent implements OnInit {
  value19: number = 0;
  val3:number
  constructor(private primengConfig: PrimeNGConfig,private messageService: MessageService) {
    this.val3 =3;
   }

  ngOnInit(): void {
  }
  showInfo() {
    this.messageService.add({severity:'info', summary: 'Info', detail: 'Añadido al carrito'});
  }
}
