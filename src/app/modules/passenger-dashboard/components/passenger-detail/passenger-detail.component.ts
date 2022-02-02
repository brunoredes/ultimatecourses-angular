import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent {

  @Input() public detail: Passenger;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  public editting: boolean = false;

  constructor() { }

  public nameChange(name: string): void {
    this.detail.fullname = name;
  }

  public toggleEdit(): void {
    if(this.editting) {
      this.edit.emit(this.detail);
    }
    this.editting = !this.editting;
  }

  public onRemove(): void {
    this.remove.emit(this.detail);
  }
}
