import { Component, signal, inject } from '@angular/core';
import { config } from '../../environments/environment';
import { ContentstackQueryService } from '../../modules/contentstack/cs.query.service';
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
  //private cs = inject(ContentstackQueryService);
  serverData = toSignal(injectLoad<typeof load>(), { requireSync: true });
  private csContent = {};

  count = signal(0);
  display = config.test;
  constructor() {
    //this.getEntry();
  }
  
  increment() {
    this.count.update((count) => count + 1);
  }

  getEntry() {
    this.cs.getEntryWithQuery('page', { key: 'url', value: '/' }).then((response) => {
      this.csContent = response[0][0];
      console.log('this.csContent', this.csContent);

    })
  }

  ngOnInit() {
  }
}
