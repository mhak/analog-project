import { Component, signal, inject } from '@angular/core';
import { config } from '../../environments/environment';
//import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectLoad } from '@analogjs/router';
import { load } from './index.server'; // not included in client build
import ContentstackLivePreview from '@contentstack/live-preview-utils';
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

  ngonInit() {
    // this should be moved to layout / global
    if (window) {
      ContentstackLivePreview.init({
        ssr: true,
        enable: true,
        clientUrlParams: {
          host: 'api.contentstack.io',
        },
        stackDetails: {
          apiKey: 'blta8d6cddc9b8b91ff',
          environment: 'uat'
        },
      });
    }
  }

}
