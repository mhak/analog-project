import { Component, signal, inject } from '@angular/core';
import { config } from '../../environments/environment';
//import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectLoad } from '@analogjs/router';

import { load } from './index.server'; // not included in client build
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
  //imports: [AsyncPipe],
})

export default class HomeComponent {
  serverData = toSignal(injectLoad<typeof load>(), { requireSync: true });

  count = signal(0);
  display = config.test;
  constructor() {

  }
  
  increment() {
    this.count.update((count) => count + 1);
  }

}
