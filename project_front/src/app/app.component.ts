import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value3:string | undefined
  title = 'front';

  ngOnInit() {
    AOS.init();
 }
}
