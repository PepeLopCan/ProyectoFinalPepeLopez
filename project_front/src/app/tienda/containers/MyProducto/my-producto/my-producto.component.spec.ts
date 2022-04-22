import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductoComponent } from './my-producto.component';

describe('MyProductoComponent', () => {
  let component: MyProductoComponent;
  let fixture: ComponentFixture<MyProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
