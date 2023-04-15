import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  destinations:Destination[]=
  [
    {title:"Grecia",
      image:'assets/grecia.jpg',
    description:"the best place to visit"
    },
    {title:"Roma",
      image:'assets/roma.jpg',
    description:"Pizza italiano my friend"
    },
    {title:"Paris",
      image:'assets/paris.jpg',
    description:"come here to eat croisants"
    },
    {title:"Barcelona",
      image:'assets/barcelona.jpg',
    description:"go there and you be punch by a bull"
    },
    {title:"Venezia",
      image:'assets/venezia.jpg',
    description:"boat travels in the canals"
    },
    {title:"Cipru",
      image:'assets/cipru.jpg',
    description:"you cand do what you want"
    },
  ]
  
  currentDest:Destination={title:"NEW ADVENTURE",image:'assets/primary.jpg',
                          description:"Just go somewhere and use our service"};

  constructor() { }

  getDestinations():Destination[]{
    return this.destinations;
  }

  searchDestinationByName(name: string): Destination | undefined {
    return this.destinations.find(dest => dest.title.toLowerCase() === name.toLowerCase());
  }

  setCurrentDestination(dest:Destination){
      this.currentDest=dest;
  }
}
