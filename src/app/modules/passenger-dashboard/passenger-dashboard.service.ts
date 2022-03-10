import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Passengers } from './models/passenger.interface';

@Injectable({
  providedIn: 'root',
})
export class PassengerDashboardService {
  private readonly url = 'http://localhost:3000/passengers';
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<Passengers> {
    return this.http
      .get<Passengers>(this.url)
      .pipe(map((response) => response));
  }
}
