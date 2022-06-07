import { FormsModule } from '@angular/forms';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerViewerComponent } from './container/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,

    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
