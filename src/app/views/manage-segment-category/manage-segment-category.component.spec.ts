import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSegmentCategoryComponent } from './manage-segment-category.component';

describe('ManageSegmentCategoryComponent', () => {
  let component: ManageSegmentCategoryComponent;
  let fixture: ComponentFixture<ManageSegmentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSegmentCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSegmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
