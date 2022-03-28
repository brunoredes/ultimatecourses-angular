import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Passengers, Passenger } from './models/passenger.interface';

@Injectable({
  providedIn: 'root',
})
export class PassengerDashboardService {
  private readonly url = 'http://localhost:3000/passengers';
  constructor(private http: HttpClient) {}

  public getPassengers(): Observable<Passengers> {
    return this.http
      .get<Passengers>(this.url, { headers: this.getHeaders() })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(() => new Error(error)))
      );
  }

  public getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${this.url}/${id}`, { headers: this.getHeaders() })
      .pipe(
        map((response) => response),
        catchError((error) => throwError(() => new Error(error)))
      );
  }

  public updatePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put<Passenger>(`${this.url}/${passenger.id}`, passenger, {
        headers: this.getHeaders(),
      })
      .pipe(map((response) => response));
  }

  public removePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${this.url}/${passenger.id}`, {
        headers: this.getHeaders(),
      })
      .pipe(map((response) => response));
  }

  private getHeaders() {
    return new HttpHeaders().append('Content-Type', 'application/json');
  }
}
