import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  currentDestination:Destination=this.destService.currentDest;
  search:string='';

  constructor(private destService:CityService,
    private serviceService:ServiceService,
    private router: Router){}
    
  ngOnInit(): void {
    this.destinations=this.destService.getDestinations()
    this.services=this.serviceService.getServices()
  }

  setCity(event:any){
    this.destService.setCurrentDestination(event);
    this.currentDestination=event;
    console.log(event);
  }
  
  navigateToCity() {
    const model=this.destService.searchDestinationByName(this.search);
    if(this.search && (model!=undefined)){
      this.destService.setCurrentDestination(model)
    }

    this.router.navigate(['/city']);
  }
}
