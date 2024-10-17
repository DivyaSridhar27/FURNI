import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'furni';

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      // console.log(event);
    })
  }
}
