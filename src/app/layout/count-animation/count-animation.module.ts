import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountAnimationRoutingModule } from './count-animation-routing.module';
import { CountAnimationComponent } from './count-animation.component';


@NgModule({
  declarations: [
    CountAnimationComponent
  ],
  imports: [
    CommonModule,
    CountAnimationRoutingModule
  ]
})
export class CountAnimationModule { }
