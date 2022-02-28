import { PassengerDashboardModule } from './passenger-dashboard.module';
import { Injectable } from '@angular/core';
import { passengersMock } from 'src/app/mocks';
import { Passenger } from './models';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor() { }

  getPassengers(): Passenger[] {
    return passengersMock;
  }
}
