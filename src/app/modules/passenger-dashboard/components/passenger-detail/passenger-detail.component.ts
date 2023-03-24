import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Passenger } from '../../models';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges {

  @Input() public detail: Passenger;
  @Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output() view = new EventEmitter<Passenger>();

  public editting: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['detail']) {
      this.detail = { ...changes['detail'].currentValue };
    }
    console.log(changes);
  }

  public nameChange(name: string): void {
    this.detail.fullname = name;
  }

  public toggleEdit(): void {
    if (this.editting) {
      this.edit.emit(this.detail);
    }
    this.editting = !this.editting;
  }

  public onRemove(): void {
    this.remove.emit(this.detail);
  }

  public goToPassenger(): void {
    this.view.emit(this.detail);
  }
}
