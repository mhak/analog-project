// contentstack.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { config } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentstackPreviewService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async initLivePreview() {
    if (this.isBrowser && config.live_preview) {
      try {
        const ContentstackLivePreview = await import('@contentstack/live-preview-utils');
        ContentstackLivePreview.default.init({
          ssr: true,
          enable: true,
          clientUrlParams: {
            host: config.app_host,
          },
          stackDetails: {
            apiKey: config.api_key,
            environment: config.environment,

          },
        });
        console.log('Contentstack Live Preview initialized');
      } catch (error) {
        console.error('Error initializing Contentstack Live Preview:', error);
      }
    }
  }
}