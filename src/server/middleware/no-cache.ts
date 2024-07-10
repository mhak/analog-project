import { defineEventHandler, appendResponseHeader } from 'h3';
import { config } from '../../environments/environment'

export default defineEventHandler((event) => {
  console.log('cache control middleware', config.cache_control);
  if(config.cache_control !== true) {
    console.log('caching disabled')
    appendResponseHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate');
  } else {
    console.log('caching enabled')
  }
});