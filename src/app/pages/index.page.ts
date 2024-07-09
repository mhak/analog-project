import { Component, signal, inject } from '@angular/core';
import { config } from '../../environments/environment';
import { ContentstackQueryService } from '../../modules/contentstack/cs.query.service';
import { AsyncPipe } from '@angular/common';
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
  imports: [AsyncPipe],
})

export default class HomeComponent {
  private cs = inject(ContentstackQueryService);

  count = signal(0);
  display = config.test;
  constructor() {
    //this.getEntry();
  }
  
  increment() {
    this.count.update((count) => count + 1);
  }

  // async getEntry() {
  //   const response = await this.cs.getEntryWithQuery('page', { key: 'url', value: '/' });
  //   // console.log('entry', response);
  // }

  init() {
    
  }
}
