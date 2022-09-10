import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lms-portal-mfe-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
  @Input() leftMenu !: any;
  constructor() {}

  ngOnInit(): void {}
}
