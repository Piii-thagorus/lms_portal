import {Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {menu} from "../menu-elements";

@Component({
  selector: 'lms-portal-mfe-right-menu-item',
  templateUrl: './right-menu-item.component.html',
  styleUrls: ['./right-menu-item.component.scss'],
})
export class RightMenuItemComponent {
  @Input() menu !: any;
  @Input() iconOnly !: boolean;
  @Input() subMenu  = false;

  showDelay : FormControl;
  hideDelay : FormControl;

  constructor(){
    this.showDelay = new FormControl(0);
    this.hideDelay = new FormControl(0);
  }
  openLink() : void {
    this.menu.open = !this.menu.open;
  }

  checkForSubMenu() : boolean {
    return !!(this.menu && this.menu.sub);
  }
}
