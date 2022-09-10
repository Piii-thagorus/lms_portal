import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMenuItemComponent } from './right-menu-item.component';

describe('RightMenuItemComponent', () => {
  let component: RightMenuItemComponent;
  let fixture: ComponentFixture<RightMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RightMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
