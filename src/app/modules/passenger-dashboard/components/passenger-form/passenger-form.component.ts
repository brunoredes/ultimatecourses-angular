import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent implements OnInit {
  @Input() public detail: Passenger;
  constructor() {}

  ngOnInit(): void {}

  public toggleCheckIn(checkedIn: boolean) {
    if(checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
