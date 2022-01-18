import { Component } from '@angular/core';
interface Child {
  name: string;
  age: number;

}
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate: number | null;
  children: Child[] | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1, fullname: 'Stephen', checkedIn: true, checkInDate: 1491606000000, children: [

      ]
    },
    {
      id: 2, fullname: 'Rose', checkedIn: false, checkInDate: null, children: [
        { name: '', age: 1 }
      ]
    },
    { id: 3, fullname: 'James', checkedIn: true, checkInDate: 1491606000000, children: null },
    {
      id: 4, fullname: 'Rahela', checkedIn: false, checkInDate: null, children: [
        { name: '', age: 1 }
      ]
    },
    {
      id: 5, fullname: 'Adama', checkedIn: true, checkInDate: 1491606000000, children: [
        { name: '', age: 1 }
      ]
    }
  ];
}
