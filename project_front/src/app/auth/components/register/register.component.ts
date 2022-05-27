import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormControlName,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usario:Usuario[]=[];
  imgName: any;

  public registerForm = new FormGroup({
    nombre:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  }); 


  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }



  capturarFile(event: any) {
    this.imgName = event.currentFiles[0];
  }
  
   crearUser(){
    const formData = new FormData();
    formData.append('imagen', this.imgName);

    const usuario: Usuario = {
      nombre: this.registerForm.get('nombre')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    }

    this.authService.crearUsuario(usuario).subscribe((resp)=>{
    this.authService.uploadImg(formData, resp.crearUser.id).subscribe(() => {
      this.router.navigateByUrl('/login');
      console.log('Usuario Registrado');
      console.log(resp);
    })
  })
    } 
  }

