import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogNewProductComponent } from './element-dialog-new-product.component';

describe('ElementDialogNewProductComponent', () => {
  let component: ElementDialogNewProductComponent;
  let fixture: ComponentFixture<ElementDialogNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
