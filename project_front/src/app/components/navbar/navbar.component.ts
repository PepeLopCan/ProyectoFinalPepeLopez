import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { ProductosService } from 'src/app/shared/services/productos/productos.service';
import { producto } from 'src/app/shared/modales/producto-modal';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  producto:producto[]=[];
    dialogService: any;
  constructor(private productoService:ProductosService) {
     this.items = [
            {
                label:'home',
                icon:'pi pi-fw pi-home',
                routerLink: ['/tienda/home'],
                styleClass: 'menucus'
            },
            {
                label:'Productos',
                items:[
                    {
                        label:'BodyBoard',
                        icon:'fa-solid fa-water',
                        routerLink: ['/tienda/shop'],
                        styleClass: 'menucus'
                    },
                    {
                        label:'FishBoard',
                        icon:'fa-solid fa-fish',
                        routerLink: ['/tienda/shop'],
                        styleClass: 'menucus'
                    },
                    {
                        label:'LongBoard',
                        icon:'fa-solid fa-ruler-vertical',
                        routerLink: ['/tienda/shop'],
                        styleClass: 'menucus'
                    },
                ]
            },
            {
                label:'Sobre Nosotros',
                styleClass: 'menucus'
            },
            {
                label:'Contacto',
                icon:'pi pi-fw pi-calendar',
                styleClass: 'menucus'
            },
        ];
   }

  ngOnInit(): void {
  
  }


}
