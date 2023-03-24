import { Component } from '@angular/core';
interface Nav {
  link: string;
  name: string;
  exact: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly navigation: Nav[] = [
    { link: '/', name: 'Home', exact: true },
    { link: '/passengers', name: 'Passengers', exact: true },
    { link: '/oops', name: '404', exact: false },
  ];
}
