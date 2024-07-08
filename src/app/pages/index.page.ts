import { Component, signal } from '@angular/core';
import { Config } from '../../environments/environment';

@Component({
  selector: 'app-home1',
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
  
  display = Config.test;

  increment() {
    console.log('import', import.meta.env);
    this.count.update((count) => count + 1);
  }
}
