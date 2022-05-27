import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';
import { ModalEditUsuarioComponent } from '../component/modal-edit-usuario/modal-edit-usuario.component';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css'],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class MiPerfilComponent implements OnInit {
  value2: string;
  usuarios: Usuario[] = [];
  id: any;
  user = JSON.parse(localStorage.getItem('usuario') || '');
  usuario = JSON.stringify(localStorage.getItem('usuario') || '');

  constructor(
    private usuarioService: UsuariosService,
    public dialogService: DialogService,
    public messageService: MessageService,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {
    this.value2 = 'Pepe';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getMiUsuario();
  }

  onBasicUpload(event: any) {}
  show(user: any) {
    const modal = this.dialogService.open(ModalEditUsuarioComponent, {
      data: {
        user: user,
      },

      header: 'Editar mi Perfil',
      width: '400px',
      height: '400px',
      dismissableMask: true,
    });

    modal.onClose.subscribe((product: boolean) => {
      if (product) {
        this.messageService.add({
          severity: 'info',
          summary: 'Info',
          detail: 'Perfil Actualizado',
        });
        this.getMiUsuario();
      }
    });
  }

  getMiUsuario() {
    const user = JSON.parse(localStorage.getItem('usuario') || '');
    this.usuarioService.getMiUsuario(user).subscribe((resp: any) => {
      this.usuarios = resp.miUsuario;
      console.log(this.usuarios);
    });
  }

  deleteUsuario(id: string) {
    this.usuarioService.deleteUser(id).subscribe((resp: any) => {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.router.navigateByUrl('/login');
      console.log(this.usuarios);
    });
  }

  confirm(event: any, usuario: any) {
    console.log(event);
    this.confirmationService.confirm({
      message: `¿Estas seguro que deseas eliminar al usuario ${usuario.nombre}?`,
      accept: () => {
        this.deleteUsuario(usuario.id);
        console.log(usuario.id);
      },
    });
  }
}
