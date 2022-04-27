import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcreateProductComponent } from './modalcreate-product.component';

describe('ModalcreateProductComponent', () => {
  let component: ModalcreateProductComponent;
  let fixture: ComponentFixture<ModalcreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcreateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
