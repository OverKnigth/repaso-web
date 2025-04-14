import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductComponent } from './ver-product.component';

describe('VerProductComponent', () => {
  let component: VerProductComponent;
  let fixture: ComponentFixture<VerProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
