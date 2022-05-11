import { Injectable } from '@angular/core';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InjectorService {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('LLEGO');
    const token: any = localStorage.getItem('token');

    let request = req;

    request = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
    return next.handle(request);
  }
}
