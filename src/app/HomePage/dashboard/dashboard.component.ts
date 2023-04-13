import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination';
import { Service } from 'src/app/models/service';
import { CityService } from 'src/app/services/city.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  destinations:Destination[]=[]
  services:Service[]=[]

  constructor(private destService:CityService,private serviceService:ServiceService){}
  ngOnInit(): void {
    this.destinations=this.destService.getDestinations()
    this.services=this.serviceService.getServices()
  }


}
