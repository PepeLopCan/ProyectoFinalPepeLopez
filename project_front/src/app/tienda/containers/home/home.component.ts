import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import { Carousel } from 'src/app/shared/modales/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel:Carousel[] =[];
  constructor(private carouselService:CarouselService) {
   }

  ngOnInit(): void {

    this.carouselService.getCarousel().then(data =>{
      this.carousel = data;
      console.log()
    })
  }

}
