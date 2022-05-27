import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  usario: Usuario[] = [];
  public registerForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  crearUser() {
    return this.authService
      .crearUsuario(this.registerForm.value)
      .subscribe((resp) => {
        this.router.navigateByUrl('/login');
        console.log('Usuario Registrado');
      });
  }
}
