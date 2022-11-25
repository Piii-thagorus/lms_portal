import {Routes} from "@angular/router";
import {RightMenuComponent} from "./navigation/right-menu/right-menu.component";
import {LeftMenuComponent} from "./navigation/left-menu/left-menu.component";

export const ROUTES : Routes = [


    {
        path: '',
        outlet: 'topMenu',
        loadChildren: () => import(
            'login/Module'
            ).then((m) => m.RemoteEntryModule)
    },
    {
        path: 'calendar',
        loadChildren: () => import(
            'calendar/Module'
            ).then((m) => m.RemoteEntryModule)
    }

];

