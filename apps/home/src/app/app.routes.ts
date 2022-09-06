import {Routes} from "@angular/router";

export const ROUTES : Routes = [


    {
        path: 'login',
        outlet: 'leftMenu',
        loadChildren: () => import(
            'login/Module'
            ).then((m) => m.RemoteEntryModule)
    }

];

