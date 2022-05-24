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
cantidad:number=0;
producto:Product[]=[];
public archivos: any =[];
imagenURL:any;
inventario: Array<string> = ['OUTOFSTOCK', 'LOWSTOCK', 'INSTOCK'];
categoria: Array<string> = ['LongBoards', 'BodyBoards', 'FishBoard'];

  public crearProducto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    inventario: new FormControl('INSTOCK', Validators.required),
    categoria: new FormControl('LongBoards', Validators.required),
    cantidad: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
    
    
  })

  constructor( private productService:ProductserviceService ,private router:Router,
    private aRouter:ActivatedRoute, public ref: DynamicDialogRef,
    public config: DynamicDialogConfig, private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
  }

capturarFile(event:any) {
    this.imagenURL = event.files;
    console.log(this.imagenURL)
    
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
      imagen:this.imagenURL,
      nombre: this.crearProducto.get('nombre')?.value,
      descripcion: this.crearProducto.get('descripcion')?.value,
      inventario: this.crearProducto.get('inventario')?.value,
      categoria: this.crearProducto.get('categoria')?.value,
      cantidad: this.crearProducto.get('cantidad')?.value,
      precio: this.crearProducto.get('precio')?.value,
      rating: this.crearProducto.get('rating')?.value,
    }
    this.productService.createProduct(producto).subscribe((resp)=>{
      this.ref.close(true);
      console.log(resp);
    })
  }
}
