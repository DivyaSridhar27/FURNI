import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  currentUrl: any;

  constructor(private route: Router, private activeRoute: ActivatedRoute) {
    this.route.events.subscribe((event: any) => {
      console.log('current route: ', this.route.url.toString());
      this.currentUrl = this.route.url.toString();
    });
  }

  redirectTo(url: string) {
    console.log('url', url)
    this.route.navigate(['/', url]);
  }
}
