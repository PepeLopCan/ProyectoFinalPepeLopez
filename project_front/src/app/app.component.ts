import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import * as AOS from 'aos';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn$?: Observable<boolean>;  
  value3:string | undefined
  title = 'front';
constructor(public authService:AuthService){

}
  ngOnInit() {
    AOS.init();
 }

 
}
