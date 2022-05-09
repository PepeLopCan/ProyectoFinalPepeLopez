import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductserviceService } from 'src/app/shared/services/productos/productservice.service';
import { Product } from 'src/app/shared/interfaces/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalcreateProductComponent } from '../components/modalcreate-product/modalcreate-product.component';
import { DialogService } from 'primeng/dynamicdialog';

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


  product!: Product;

  selectedProducts: Product[]=[];

  submitted: boolean;

  stock: Array<string>=['STOCK,LOWSTOKC,OUTOFSTOCK'];

 
 
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
    labels: ['OUTOFSTOCK','STOCK','LOWSTOCK'],
    datasets: [
        {
            data: [150, 150, 150],
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

  deleteUsuario(id:any){
    this.producService.deleteProducto(id).subscribe((resp:any)=>{
     this.getProductos();
    })
  }


      openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

  editProduct(product: Product) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: Product) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + product.nombre + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.products = this.products.filter(val => val.id !== product.id);
              this.product = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          }
      });
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }
  
  saveProduct() {
       this.submitted = true;
      if (this.product.nombre?.trim()) {
          if (this.product.id) {              
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
          }
          else {
              this.products.push(this.product);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.products = [...this.products];
          this.productDialog = false;
          this.product = {};
      } 
  }


  show() {
    const modal = this.dialogService.open(ModalcreateProductComponent, {
      header:"Crear producto",
      width: '450px',
      height: '700px',
      dismissableMask: true,
    });
    modal.onClose.subscribe((product: boolean) =>{
        if (product== true) {
          this.messageService.add({severity:'info', summary: 'Info', detail: 'Perfil Actualizado'});
          this.getProductos();
        }
    });
  }

}
