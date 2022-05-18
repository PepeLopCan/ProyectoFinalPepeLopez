import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module.module';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModuleModule,
    AuthRoutingModule
    
    
  ]
})
export class AuthModule { }
