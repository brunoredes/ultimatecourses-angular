import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from '../../models';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent {

  @Input() public items: Passenger[] = [];

  checkedInCount(): number | undefined {
    if (!this.items) {
      return;
    }
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

}
