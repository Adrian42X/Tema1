import { Injectable } from '@angular/core';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  services:Service[]=[
    {title:'Travel',description:'we have people for recomanding travels' },
    {title:'Travel Guide',description:'we guide you in traveling'},
    {title:'Activities',description:'a lot of activities to do'},
    {title:'Travel Arangements',description:'best travel arangements in the galaxy'}
  ]

  constructor() { }

  getServices():Service[]{
    return this.services
  }
}
