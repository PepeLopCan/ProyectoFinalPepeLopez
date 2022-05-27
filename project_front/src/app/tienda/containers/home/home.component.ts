import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { Carousel } from 'src/app/shared/modales/carousel';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  carousel: Carousel[] = [];
  product: Product[] = [];
  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.carouselService.getCarousel().then((data) => {
      this.carousel = data;
      console.log();
    });
  }
}
