import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: '', component: DashboardComponent    },
  { path: 'user', component: UserComponent },
  { path: 'organization',  component: OrganisationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
