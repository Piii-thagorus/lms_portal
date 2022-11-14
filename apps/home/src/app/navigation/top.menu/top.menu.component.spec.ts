import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDrawer, MatDrawerContent, MatSidenav } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { MaterialExampleModule } from '@lms-portal-mfe/shared';
import { NavigationComponent } from '../navigation.component';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { TopMenuComponent } from './top.menu.component';
import {MatDrawerHarness} from '@angular/material/sidenav/testing';

describe('TopMenuComponent', () => {

  let component: TopMenuComponent;

  let fixture: ComponentFixture<TopMenuComponent>;

  let loader: HarnessLoader 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TopMenuComponent,
        NavigationComponent
      ],
      imports: [
        MaterialExampleModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TopMenuComponent);

    component = fixture.componentInstance;


    const navComponent = TestBed.createComponent(NavigationComponent);

    loader = TestbedHarnessEnvironment.loader(navComponent);

    component.rightMenu = await loader.getHarness<MatDrawerHarness>(MatDrawerHarness.with({

    }))

    //console.log(component.rightMenu.innerHTML)
    component.leftMenu = navComponent.debugElement.query(By.css("#left-menu"))

    console.log(component.leftMenu)

    component.drawer = navComponent.nativeElement.querySelector("mat-drawer")

    fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });

  it('clicking left menu button should close left menu when open', () => {

      const menuButton : HTMLElement = fixture.debugElement.query(By.css("#left-menu-button")).nativeElement

      menuButton.click()

  })
});