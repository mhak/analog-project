import { Component, signal } from '@angular/core';
//import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './index.page.html',
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})

export default class HomeComponent {
  count = signal(0);
  display = process.env["meng"];

  increment() {
    this.count.update((count) => count + 1);
  }
}
