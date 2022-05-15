import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormControlName,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usario:Usuario[]=[];
  isLoggedin: boolean = false;

  public loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  });
  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {}

  login(){
    if ( this.loginForm.invalid){
      return
    }
    this.authService.login(this.loginForm.value).subscribe((result: any) => {
  
      localStorage.setItem('token', result.token);
      localStorage.setItem('usuario', JSON.stringify(result.userEmail));
      console.log(result.userEmail);
      this.router.navigateByUrl('/tienda/home');
      console.log('Usuario logueado');
      console.log(result);
    })
  }

}
