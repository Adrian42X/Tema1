import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent {
  @Input() destination!: Destination;
}
