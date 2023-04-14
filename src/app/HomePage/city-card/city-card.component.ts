import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent {
  @Input() destination!: Destination;
  @Output() cityEmitter: EventEmitter<Destination> = new EventEmitter<Destination>();

  emitDestination(){
    this.cityEmitter.emit(this.destination);
  }
}
