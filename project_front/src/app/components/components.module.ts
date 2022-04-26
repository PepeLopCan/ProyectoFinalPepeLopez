import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModuleModule } from '../shared-module.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,

  
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModuleModule
  ]
})
export class ComponentsModule {}
