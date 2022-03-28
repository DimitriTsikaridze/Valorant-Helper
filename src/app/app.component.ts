import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onRoute() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
