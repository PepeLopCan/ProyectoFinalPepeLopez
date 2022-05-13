import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modalcreate-product',
  templateUrl: './modalcreate-product.component.html',
  styleUrls: ['./modalcreate-product.component.scss']
})
export class ModalcreateProductComponent implements OnInit {

producto:Product[]=[];
  inventario: Array<string> = ['OUTOFSTOCK', 'LOWSTOCK', 'INSTOCK'];

  public crearProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    inventario: new FormControl('INSTOCK', Validators.required),
    categoria: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    
    
  })

  constructor( private productService:ProductserviceService ,private router:Router,
    private aRouter:ActivatedRoute, public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }

  crear(){
    const producto:Product ={
      nombre: this.crearProducto.get('nombre')?.value,
      description: this.crearProducto.get('description')?.value,
      inventario: this.crearProducto.get('inventario')?.value,
      categoria: this.crearProducto.get('categoria')?.value,
      precio: this.crearProducto.get('precio')?.value,
      cantidad: this.crearProducto.get('cantidad')?.value,
      rating: this.crearProducto.get('rating')?.value,

    }
    this.productService.createProduct(producto).subscribe((resp)=>{
      this.ref.close(true);
      console.log(resp);
    })
  }

}
