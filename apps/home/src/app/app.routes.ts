import {Routes} from "@angular/router";

export const ROUTES : Routes = [


    {
        path: '',
        outlet: 'topMenu',
        loadChildren: () => import(
            'login/Module'
            ).then((m) => m.RemoteEntryModule)
    }

];

