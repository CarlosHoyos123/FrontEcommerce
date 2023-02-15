import { Route } from "@angular/router";
import { LayoutHomeComponent } from "./modulos/layaout/layout-home/layout-home.component";
import { LayoutLoginComponent } from "./modulos/layaout/layout-login/layout-login.component";

export const appRutas: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'Auth',
        component: LayoutLoginComponent,
        children: [
            { path: '', loadChildren: () => import('src/app/modulos/auth/auth.module').then(m => m.AuthModule) }
        ]
    },
    {
        path: 'Tienda',
        component: LayoutHomeComponent,
        children: [
            {
                path: '', loadChildren: () => import('src/app/modulos/maestros/maestros.module')
                    .then(m => m.MaestrosModule)
            },
            {
                path: '', loadChildren: () => import('src/app/modulos/home/home.module')
                    .then(m => m.HomeModule)
            },
            {
                path: '', loadChildren: () => import('src/app/modulos/detailed/detailed.module')
                    .then(m => m.DetailedModule)
            }
        ]
    },
];