import { Passengers } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models';
import { PassengerDashboardService } from './../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit {
  passengers!: Passengers;

  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    this.passengerService.getPassengers().subscribe(
      (data: Passengers) => (this.passengers = data),
      (error) => console.error(error),
      () => {
        console.log('completed');
      }
    );
  }

  handleRemove(event: Passenger): void {
    this.passengerService
      .removePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter(
          (passenger: Passenger) => passenger.id !== event.id
        );
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = { ...passenger, ...event };
          }
          return passenger;
        });
      });
  }
}
