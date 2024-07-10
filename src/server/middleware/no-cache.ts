import { defineEventHandler, appendResponseHeader } from 'h3';
import { config } from '../../environments/environment'

// Disable cache on preview site so content editor changes are reflected
export default defineEventHandler((event) => {
  if(config.disable_header_cache) {
    console.log('header caching disabled')
    appendResponseHeader(event, 'Cache-Control', 'no-store, no-cache, must-revalidate');
  }
});