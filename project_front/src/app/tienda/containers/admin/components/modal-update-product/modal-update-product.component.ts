import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';

@Component({
  selector: 'app-modal-update-product',
  templateUrl: './modal-update-product.component.html',
  styleUrls: ['./modal-update-product.component.css']
})
export class ModalUpdateProductComponent implements OnInit {


  formEdit: any;
  data:any;
  productos:Product[]=[];
  inventario: Array<string> = ['OUTOFSTOCK', 'LOWSTOCK', 'INSTOCK'];
  categoria: Array<string> = ['LongBoards', 'BodyBoards', 'FishBoard'];
  public archivos: any =[];

  constructor(
    private productService:ProductserviceService ,
    private router:Router,
    private aRouter:ActivatedRoute, 
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig, 
    private confirmationService: ConfirmationService) {

      this.data = this.config.data
      this.formEdit = new FormGroup({
        nombre: new FormControl(this.data?.products?.nombre, Validators.required),
        descripcion: new FormControl(this.data?.products?.descripcion, Validators.required),
        inventario: new FormControl(this.data?.products?.inventario, Validators.required),
        categoria: new FormControl(this.data?.products?.categoria, Validators.required),
        precio: new FormControl(this.data?.products?.precio, Validators.required),
        rating: new FormControl(this.data?.products?.rating, Validators.required),
     })
     console.log(this.data);
     console.log(this.formEdit);
    }

      
  ngOnInit(): void {
    
  }

  capturarFile(event:any) {
    const archivoCaptuado = event.target.files[0];
    this.archivos.push(archivoCaptuado)
    console.log(event.target.files);
  }
  
    

  editar(id:string){
    console.log(this.formEdit.value);
    console.log(id);
    this.productService.updateProducto(id, this.formEdit.value).subscribe((resp:any)=>{
      console.log(resp)
      this.ref.close(true);
    })
  }

}

