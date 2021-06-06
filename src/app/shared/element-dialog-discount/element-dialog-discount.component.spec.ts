import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogDiscountComponent } from './element-dialog-discount.component';

describe('ElementDialogDiscountComponent', () => {
  let component: ElementDialogDiscountComponent;
  let fixture: ComponentFixture<ElementDialogDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
