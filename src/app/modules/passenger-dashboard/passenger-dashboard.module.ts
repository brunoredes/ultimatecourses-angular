import { PassengerDashboardService } from './passenger-dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,

    PassengerCountComponent,
    PassengerDetailComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
