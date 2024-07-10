import { config } from '../../environments/environment'
import {createContentstackClient} from './contentstack.service'

export function createClient() {
  return {
    api: createContentstackClient({
      key: config.api_key,
      token: config.delivery_token,
      environment: config.environment,
      region: 'US',
      branch: config.branch,
      preview: {
        enable: config.live_preview,
        host: 'rest-preview.contentstack.com',
        token: config.preview_token,
      },
    }),
  }
}
