import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  destinations:Destination[]=
  [
    {title:"Grecia",
      image:'images/grecia.jpg',
    description:"the best place to visit"
    },
    {title:"Roma",
      image:'https://picsum.photos/seed/picsum/200/300',
    description:"Pizza italiano my friend"
    },
    {title:"Paris",
      image:'../../images/paris.jpg',
    description:"come here to eat croisants"
    },
    {title:"Barcelona",
      image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1268855%2Fpexels-photo-1268855.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-asad-photo-maldives-1268855.jpg%26fm%3Djpg&tbnid=Qa3udWzDzVYPTM&vet=12ahUKEwjt65nJlaf-AhURtKQKHUeWAbsQMygBegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fvacation%2F&docid=MlTooWVi9LhKLM&w=4043&h=2690&q=vacation%20images%20urls&hl=en&ved=2ahUKEwjt65nJlaf-AhURtKQKHUeWAbsQMygBegUIARCeAQ',
    description:"go there and you be punch by a bull"
    },
    {title:"Venezia",
      image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1268855%2Fpexels-photo-1268855.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-asad-photo-maldives-1268855.jpg%26fm%3Djpg&tbnid=Qa3udWzDzVYPTM&vet=12ahUKEwjt65nJlaf-AhURtKQKHUeWAbsQMygBegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fvacation%2F&docid=MlTooWVi9LhKLM&w=4043&h=2690&q=vacation%20images%20urls&hl=en&ved=2ahUKEwjt65nJlaf-AhURtKQKHUeWAbsQMygBegUIARCeAQ',
    description:"boat travels in the canals"
    },
    {title:"Cipru",
      image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F1268855%2Fpexels-photo-1268855.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-asad-photo-maldives-1268855.jpg%26fm%3Djpg&tbnid=Qa3udWzDzVYPTM&vet=12ahUKEwjt65nJlaf-AhURtKQKHUeWAbsQMygBegUIARCeAQ..i&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fvacation%2F&docid=MlTooWVi9LhKLM&w=4043&h=2690&q=vacation%20images%20urls&hl=en&ved=2ahUKEwjt65nJlaf-AhURtKQKHUeWAbsQMygBegUIARCeAQ',
    description:"you cand do what you want"
    },
  ]
  
  currentDest:Destination={title:"NEW ADVENTURE",image:'https://picsum.photos/seed/picsum/200/300',
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
