import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-modalcreate-product',
  templateUrl: './modalcreate-product.component.html',
  styleUrls: ['./modalcreate-product.component.scss']
})
export class ModalcreateProductComponent implements OnInit {

producto:Product[]=[];
  inventario: Array<string> = ['OUTOFSTOCK', 'LOWSTOCK', 'INSTOCK'];
  categoria: Array<string> = ['LongBoards', 'BodyBoards', 'FishBoard'];

  public crearProducto = new FormGroup({
    imagen: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    inventario: new FormControl('INSTOCK', Validators.required),
    categoria: new FormControl('LongBoards', Validators.required),
    precio: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    
    
  })

  constructor( private productService:ProductserviceService ,private router:Router,
    private aRouter:ActivatedRoute, public ref: DynamicDialogRef,
    public config: DynamicDialogConfig, private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
  }


  
  confirm(event: any) {
    console.log(event);
    this.confirmationService.confirm({
      message: `¿Estas seguro que deseas crear el producto?`,
      accept: () => {
        this.crear()
      }
    });
  }


  crear(){
    const producto:Product ={
      imagen: this.crearProducto.get('imagen')?.value,
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

  onBasicUpload(event:any) {

    for(let file of event.files) {
      this.producto.push(file);
  }
}
}
