import { Component, OnInit } from '@angular/core';
import { Destination } from '../models/destination';
import { CityService } from '../services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citypage',
  templateUrl: './citypage.component.html',
  styleUrls: ['./citypage.component.css']
})
export class CitypageComponent implements OnInit{
  destination!:Destination;

  constructor(private destinationService:CityService,
    private router:Router){}
  
  ngOnInit(): void {
    this.destination=this.destinationService.currentDest;
  }

  goToHome(){
    this.router.navigate(['/home']);
  }
}
