import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ChooseUsModule } from '../choose-us/choose-us.module';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ChooseUsModule
  ]
})
export class ServicesModule { }
