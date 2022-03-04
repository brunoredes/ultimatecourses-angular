import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models';
import { PassengerDashboardService } from './../../passenger-dashboard.service';


@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[] = [];

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit(): void {
    this.passengers = this.passengerService.getPassengers();
  }

  handleRemove(event: Passenger): void {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);

  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
}
