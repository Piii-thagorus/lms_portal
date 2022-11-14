import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialExampleModule } from '@lms-portal-mfe/shared';
import { RightMenuItemComponent } from '../right-menu-item/right-menu-item.component';
import {menu, MENUS} from "../menu-elements";

import { RightMenuComponent } from './right-menu.component';
import exp from 'constants';

describe('RightMenuComponent', () => {
  let component: RightMenuComponent;
  let fixture: ComponentFixture<RightMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialExampleModule
      ],

      declarations: [
        RightMenuComponent,
        RightMenuItemComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check if the right menu items are returned', () => {
    expect(component.getMenus()).toBe(MENUS)
  })
});
