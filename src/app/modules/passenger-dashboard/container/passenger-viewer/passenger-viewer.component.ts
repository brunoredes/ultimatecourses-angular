import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap, takeUntil, Subject } from 'rxjs';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from './../../models/passenger.interface';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss'],
})
export class PassengerViewerComponent implements OnInit, OnDestroy {
  public passenger!: Passenger;
  destroy$: Subject<boolean> = new Subject();
  constructor(
    private readonly passengerService: PassengerDashboardService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(
          (data: Passenger) => this.passengerService.getPassenger(data.id)
        ),
        takeUntil(this.destroy$))
      .subscribe({ next: data => this.passenger = data });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassengers(event)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: data => {
          this.passenger = { ...this.passenger, ...data };
        }
      });
  }

  public goBack() {
    this.router.navigate(['/passengers']);
  }
}
