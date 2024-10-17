import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    HomeModule,
    FooterModule
  ]
})
export class LayoutModule { }
