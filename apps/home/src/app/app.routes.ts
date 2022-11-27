import {Routes} from "@angular/router";

export const ROUTES : Routes = [


    {
        path: '',
        loadChildren: () => import(
            'new-api/Module'
            ).then((m) => m.RemoteEntryModule)
    },
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
    },
    {
        path: '',
        outlet: 'loading',
        loadChildren: () => import(
            'loader/Module'
        ).then((m) => m.RemoteEntryModule)
    }
];

