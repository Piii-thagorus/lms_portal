import {Component, Input} from '@angular/core';

@Component({
  selector: 'lms-portal-mfe-top-menu',
  templateUrl: './top.menu.component.html',
  styleUrls: ['./top.menu.component.scss'],
})
export class TopMenuComponent {

  @Input() leftMenu: any;
  @Input() rightMenu: any;
  @Input() drawer : any;
  @Input() matDrawerShow !: boolean;
}
