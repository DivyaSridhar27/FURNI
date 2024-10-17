import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountAnimationComponent } from './count-animation.component';

const routes: Routes = [{ path: '', component: CountAnimationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountAnimationRoutingModule { }
