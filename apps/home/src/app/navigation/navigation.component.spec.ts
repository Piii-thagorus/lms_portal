import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialExampleModule } from '@lms-portal-mfe/shared';

import { NavigationComponent } from './navigation.component';

@Component({selector: 'lms-portal-mfe-right-menu'})
class rightMenuComponent{ }

@Component({selector: 'lms-portal-mfe-left-menu'})
class leftMenuComponent{}

describe('TopMenuComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [

        NavigationComponent,
        rightMenuComponent,
        leftMenuComponent

      ],
      schemas: [NO_ERRORS_SCHEMA],

      imports: [MaterialExampleModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
