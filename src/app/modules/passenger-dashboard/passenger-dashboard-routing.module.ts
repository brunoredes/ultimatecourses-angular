import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: ':id', component: PassengerViewerComponent },
            { path: '**', component: PassengerDashboardComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PassengerDashboardRoutingModule { }
