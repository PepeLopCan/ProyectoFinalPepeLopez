import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateProductComponent } from './modal-update-product.component';

describe('ModalUpdateProductComponent', () => {
  let component: ModalUpdateProductComponent;
  let fixture: ComponentFixture<ModalUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
