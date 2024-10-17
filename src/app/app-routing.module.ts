import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'testimonial', loadChildren: () => import('./layout/testimonial/testimonial.module').then(m => m.TestimonialModule) },
  { path: 'choose-us', loadChildren: () => import('./layout/choose-us/choose-us.module').then(m => m.ChooseUsModule) },
  { path: 'count-animation', loadChildren: () => import('./layout/count-animation/count-animation.module').then(m => m.CountAnimationModule) },
  { path: '**', redirectTo: '' } // Redirect any unmatched routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
