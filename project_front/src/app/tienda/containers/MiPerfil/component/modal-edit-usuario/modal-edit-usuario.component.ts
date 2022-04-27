import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-modal-edit-usuario',
  templateUrl: './modal-edit-usuario.component.html',
  styleUrls: ['./modal-edit-usuario.component.css'],
  providers: [MessageService]
})
export class ModalEditUsuarioComponent implements OnInit {

  usuario:Usuario[]=[];
  _id:any
  formEdit: any;
  data:any;


  constructor( 
    private router:Router,
    private primengConfig: PrimeNGConfig,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private userService:UsuariosService,
    private messageService: MessageService) {
      
      /*this.data = this.config.data
      this.formEdit = new FormGroup({
        nombre: new FormControl(this.data?.usuarios?.nombre, Validators.required),
        email: new FormControl(this.data?.usuarios?.email, Validators.required),
        role: new FormControl(this.data?.usuarios?.role || 'ADMIN_ROLE')
     })
     console.log(this.data); */
     
     }

  ngOnInit(): void {
  }
   editar(id:string){
    this.userService.updateUser(id, this.formEdit.value).subscribe((resp:any)=>{
      this.ref.close(true);
    })

}
showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Usuario Borrado'});
}
showSuccess() {
  this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}


}
