import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalcreateProductComponent } from '../components/modalcreate-product/modalcreate-product.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalUpdateProductComponent } from '../components/modal-update-product/modal-update-product.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService, ConfirmationService,DialogService]
 
})
export class AdminComponent implements OnInit {

  
  data: any;

  chartOptions: any;

  basicData: any;

  basicOptions: any;

  productDialog: boolean;

  products: Product[]=[];

  selectedProducts: Product[]=[];

  submitted: boolean;

  stock: Array<string>=['STOCK,LOWSTOCK,OUTOFSTOCK'];

  

 
 
  public productForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    inventario: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    valoracion: new FormControl('', Validators.required),
  });


  constructor(private producService:ProductserviceService,
    private messageService: MessageService,public dialogService: DialogService,
    private confirmationService: ConfirmationService){ 
      this.productDialog=false;
      this.submitted=false;  
    }

  ngOnInit(): void {
    this.getProductos();

    for( let i in this.products){

    }

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#9EFFAD',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9EE2FF',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]

      
  };
  this.data = {
    labels: ['OUTOFSTOCK','INSTOCK','LOWSTOCK'],
    datasets: [
        {
            data: [50, 250, 150],
            backgroundColor: [
                "#FFCDD2",
                "#C8E6C9",
                "#FEEDAF"
            ],
            hoverBackgroundColor: [
                "#FFCDD2",
                "#C8E6C9",
                "#FEEDAF"
            ]
        }
    ]
};
  }

  getProductos() {
    this.producService.getProductos().subscribe((resp: any) => {
      this.products = resp.AllProducts;
      console.log(resp);
    });
  }

  confirm(event: any, product:Product) {
    console.log(event);
    this.confirmationService.confirm({
      message: `¿Estas seguro que deseas eliminar al usuario ${product.nombre}?`,
      accept: () => {
        this.deleteProducto(product.id)
        console.log(product.id);
      }
    });
  }


  deleteProducto(id:any){
    this.producService.deleteProducto(id).subscribe((resp:any)=>{
    console.log(resp);
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Producto Eliminado', life: 3000});
     this.getProductos();
    })
  }


  show() {
    const modal = this.dialogService.open(ModalcreateProductComponent, {
      header:"Crear producto",
      width: '550px',
      height: '700px',
    });
    modal.onClose.subscribe((product: boolean) =>{
        if (product== true) {
          this.messageService.add({severity:'info', summary: 'Info', detail: 'Producto creado'});
          this.getProductos();
        }
    });
  }

  showUpdate(product:any) {
    console.log(product)
    const modal = this.dialogService.open(ModalUpdateProductComponent, {
      data: {
        products:product
      },
      header:"Actualizar producto",
      width: '550px',
      height: '700px',
      dismissableMask: true,
    });
    modal.onClose.subscribe((product: boolean) =>{
        if (product== true) {
          this.messageService.add({severity:'info', summary: 'Info', detail: 'Producto Actualizado'});
          this.getProductos();
        }
    });
  }



}
