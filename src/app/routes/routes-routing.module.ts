import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserPage } from './user/user.page';


const routes: Routes = [
  {path: 'home', component: HomePage},
  {path: '', component: UserPage, children: [
    {path: ':id', component: UserDetailComponent}] },
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutesRoutingModule { }
