import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  redirectTo(url: string) {
    console.log('url', url)
    this.route.navigate(['/', url]);
  }
}
