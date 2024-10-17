import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestimonialModule } from '../testimonial/testimonial.module';
import { ChooseUsModule } from '../choose-us/choose-us.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TestimonialModule,
    ChooseUsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
