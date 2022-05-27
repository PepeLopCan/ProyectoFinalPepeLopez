import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Carousel } from '../modales/carousel';
@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor(private http: HttpClient, private router: Router) {}

  getCarousel() {
    return this.http
      .get<any>('../../../../assets/archivosConfig/carousel.json')
      .toPromise()
      .then((res) => <Carousel[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
