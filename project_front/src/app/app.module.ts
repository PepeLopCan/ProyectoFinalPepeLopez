import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModuleModule } from './shared-module.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AuthModule } from './auth/auth.module';
import { TiendaModule} from './tienda/tienda.module'
import { ComponentsModule } from './components/components.module';
import { InjectorService } from './injector/injector.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    AuthModule,
    TiendaModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
