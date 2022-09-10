import {Component, Input } from '@angular/core';
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
  openLink() : void {
    this.menu.open = !this.menu.open;
  }

  checkForSubMenu() : boolean {
    return !!(this.menu && this.menu.sub);
  }
}
