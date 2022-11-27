import {Component, Input, OnInit} from '@angular/core';
import {MatDrawerMode} from "@angular/material/sidenav";
import {MediaObserver} from "@angular/flex-layout";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'lms-portal-mfe-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

    @Input() isVisible = true;

    visibility  = 'shown';

    isAuth0Loading$ = this.auth.isLoading$;

    sideNavOpened  = true;
    matDrawerOpened  = false;
    matDrawerShow  = true;
    sideNavMode: MatDrawerMode = 'side';

    constructor(private media: MediaObserver, private auth: AuthService) { }

    ngOnChanges = () => {
      this.visibility = this.isVisible ? 'shown' : 'hidden';
    };

    ngOnInit(): void {
      this.media.asObservable().subscribe( () => {
        this.toggleView();
      });

    }


    leftMenuSideNavMode() : MatDrawerMode {

      this.sideNavMode = ( this.media.isActive('lt-md ') )? "push" : "side";

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
