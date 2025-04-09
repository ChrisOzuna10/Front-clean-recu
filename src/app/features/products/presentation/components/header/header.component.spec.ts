import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: ProductHeaderComponent;
  let fixture: ComponentFixture<ProductHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
