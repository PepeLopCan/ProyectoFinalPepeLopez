import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';
import { ModalEditUsuarioComponent } from '../component/modal-edit-usuario/modal-edit-usuario.component';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css'],
  providers: [DialogService, MessageService]
})
export class MiPerfilComponent implements OnInit {
 value2:string;
 usuarios: Usuario[]=[];

  constructor( private usuarioService:UsuariosService,  public dialogService: DialogService, public messageService: MessageService) {
    this.value2="Pepe";
   }

  ngOnInit(): void {
  }

  onBasicUpload(event:any) {
}
show() {
  const modal = this.dialogService.open(ModalEditUsuarioComponent, {
    header: 'Editar mi Perfil',
    width: '400px',
    height: '400px',
    dismissableMask: true,
  });

  modal.onClose.subscribe((product: boolean) =>{
      if (product) {
          this.messageService.add({severity:'info', summary: 'Product Selected'});
      }
  });
}
}



