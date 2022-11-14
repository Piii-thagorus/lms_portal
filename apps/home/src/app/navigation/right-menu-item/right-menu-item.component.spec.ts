import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightMenuItemComponent } from './right-menu-item.component';
import { menu } from '../menu-elements'
import { MaterialExampleModule } from '@lms-portal-mfe/shared';
import { Router } from '@angular/router';

describe('RightMenuItemComponent', () => {

  let component: RightMenuItemComponent;

  let fixture: ComponentFixture<RightMenuItemComponent>;

  let menuElement: menu;


  beforeAll(() => {

    menuElement = {
        name : "Bursary",
        icon : "payments",
        link : false,
        open : false
    }

  });

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [MaterialExampleModule],

      declarations: [
        RightMenuItemComponent,
      ],

    }).compileComponents();

    fixture = TestBed.createComponent(RightMenuItemComponent);

    component = fixture.componentInstance;

    component.menu = menuElement;

    component.iconOnly = !menuElement.open

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Bursary menu elemenent should be rendered with icon only', () => {

    const menuItemElement: HTMLElement = fixture.nativeElement;

    const matIcon = menuItemElement.querySelector("mat-icon")?.innerHTML.trim();

    expect(matIcon).toBe( menuElement.icon.trim() );


  })


  it('Bursary menu elemenent should be rendered with name and icon', () => {

    component.iconOnly = menuElement.open
    fixture.detectChanges()

    const menuItemElement: HTMLElement = fixture.nativeElement;

    const matIcon = menuItemElement.querySelector("mat-icon")?.innerHTML.trim();

    const menuName = menuItemElement.querySelector("h3")?.innerHTML.trim();

    expect(menuName).toBe(menuElement.name)

    expect(matIcon).toBe( menuElement.icon );

  })


  it('Check if menu has sub-menu', () => {
    expect(component.checkForSubMenu()).toBeFalsy();
  })

});
