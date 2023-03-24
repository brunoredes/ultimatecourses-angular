import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full', redirectTo: 'passengers'
  },
  {
    path: 'passengers',
    loadChildren: () => import('./modules/passenger-dashboard/passenger-dashboard.module').then(m => m.PassengerDashboardModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
