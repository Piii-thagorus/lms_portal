import {Component, Input } from '@angular/core';
import {menu, MENUS} from "../menu-elements";

@Component({
  selector: 'lms-portal-mfe-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss'],
})
export class RightMenuComponent {

  @Input() iconOnly  = false;
  menus : menu[] = MENUS;

  getMenus() : menu[]{
    return this.menus;
  }
}

