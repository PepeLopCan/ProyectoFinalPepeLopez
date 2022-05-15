import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { producto } from 'src/app/shared/modales/producto-modal';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  producto:producto[]=[];
    dialogService: any;
    usuarios:Usuario[]=[];
  constructor(private router:Router, private authService:AuthService) {
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

  logout(){
    this.authService.logout()

  }
}
