import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Passenger } from '../../models';
import { Passengers } from './../../models/passenger.interface';
import { PassengerDashboardService } from './../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss'],
})
export class PassengerDashboardComponent implements OnInit, OnDestroy {
  passengers: Passengers;
  private destroy$ = new Subject();

  constructor(private passengerService: PassengerDashboardService, private router: Router) { }

  ngOnInit(): void {
    this.passengerService.getPassengers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: Passengers) => { this.passengers = data },
        error: (error: unknown) => console.error(error),
        complete: () => console.log('completed')
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  handleRemove(event: Passenger): void {
    this.passengerService
      .removePassengers(event)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.passengers = this.passengers.filter(
            (passenger: Passenger) => passenger.id !== event.id
          );
        }
      });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.passengers = this.passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id) {
              passenger = { ...passenger, ...event };
            }
            return passenger;
          });
        }
      });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}
