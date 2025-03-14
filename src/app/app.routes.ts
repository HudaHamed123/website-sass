import { Routes } from '@angular/router';

import { MealsComponent } from './component/meals/meals.component';
import { DeitalsComponent } from './component/deitals/deitals.component';
import { MainlayoutComponent } from './component/mainlayout/mainlayout.component';

export const routes: Routes = [
{path:'', component:MainlayoutComponent, children:[
    {path:'', redirectTo:'category/all', pathMatch:'full'},
    {path:'category/:categoryName', component:MealsComponent},
    {path:'mealdetails/:mealId',component:DeitalsComponent}
]}
];
