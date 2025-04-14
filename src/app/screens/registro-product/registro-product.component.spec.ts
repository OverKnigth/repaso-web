import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductComponent } from './registro-product.component';

describe('RegistroProductComponent', () => {
  let component: RegistroProductComponent;
  let fixture: ComponentFixture<RegistroProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
