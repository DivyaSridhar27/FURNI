import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
