import { Component, signal, inject, OnInit } from '@angular/core';
import { config } from '../../environments/environment';
//import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectLoad } from '@analogjs/router';
import { load } from './index.server'; // not included in client build
import { ContentstackPreviewService } from '../../lib/contentstack/contentstack.preview.service'
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
  providers: [ContentstackPreviewService],
})

export default class HomeComponent implements OnInit {
  private contentstackPreviewService = inject(ContentstackPreviewService);
  
  serverData = toSignal(injectLoad<typeof load>(), { requireSync: true });

  count = signal(0);
  display = config.test;

  constructor() {
  }
  
  increment() {
    this.count.update((count) => count + 1);
  }

  ngOnInit() {
    // todo: move to layout / global
    this.contentstackPreviewService.initLivePreview();
    //console.log('editTag', this.serverData()?.cstk?.$?.content);
  }

  // getAttributeObject<T extends Record<string, string>>(obj: T): any {
  //   return Object.entries(obj).reduce((acc, [key, value]) => {
  //     (acc as any)[`attr.${key}`] = value;
  //     return acc;
  //   }, {});
  // }
}
