import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl,FormControlName,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/shared/modales/usuario-modal';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { producto } from 'src/app/shared/modales/producto-modal';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usario:Usuario[]=[];
  producto:Product[]=[]
  isLoggedin: boolean = false;
  public loginForm!:FormGroup;

 
  constructor(private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    });
  }

  login(){
    if ( this.loginForm.invalid){
      this.router.navigate(['/login']);
    }else{
      this.authService.login(this.loginForm.value).subscribe((result: any) => {
  
        localStorage.setItem('token', result.token);
        localStorage.setItem('usuario', JSON.stringify(result.userEmail));
        localStorage.setItem('producto',JSON.stringify(this.producto))
        this.router.navigate(['/tienda/home']);
        console.log('Usuario logueado');
   
      })
    }
    
  }

}
