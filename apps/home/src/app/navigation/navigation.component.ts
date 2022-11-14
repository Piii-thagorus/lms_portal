import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer, MatDrawerMode} from "@angular/material/sidenav";
import {MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'lms-portal-mfe-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input() isVisible = true;
  visibility  = 'shown';

  sideNavOpened  = true;
  matDrawerOpened  = false;
  matDrawerShow  = true;
  sideNavMode: MatDrawerMode = 'side';

  constructor(private media: MediaObserver) { }

  ngOnChanges = () => {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  };

  ngOnInit(): void {
    this.media.asObservable().subscribe( () => {
      this.toggleView();
    });

  }

  // getRouteAnimation(outlet) {
  //
  //   return outlet.activatedRouteData.animation;
  //   //return outlet.isActivated ? outlet.activatedRoute : ''
  // }

  leftMenuSideNavMode() : MatDrawerMode {

     this.sideNavMode = ( this.media.isActive('lt-md ') ) ? 
                              "push" : "side";

      return this.sideNavMode;
  }

  setIconOnly() : boolean {

    return  !this.media.isActive('lt-md') ;
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;

    } else if(this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }

}
