import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityCardComponent } from './city-card/city-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
@NgModule({
  declarations: [DashboardComponent,CityCardComponent, ServiceCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
