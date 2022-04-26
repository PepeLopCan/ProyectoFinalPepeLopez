import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-producto',
  templateUrl: './my-producto.component.html',
  styleUrls: ['./my-producto.component.css']
})
export class MyProductoComponent implements OnInit {
  value19: number = 0;
  val3:number
  constructor() {
    this.val3 =3;
   }

  ngOnInit(): void {
  }

}
