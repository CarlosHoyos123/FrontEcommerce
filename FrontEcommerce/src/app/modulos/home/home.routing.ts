import { Route } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';


export const homeRouting: Route[] = [
    {  path: 'home/:gender', component: GridListComponent},
]