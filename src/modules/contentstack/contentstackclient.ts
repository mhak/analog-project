import { config } from '../../environments/environment'
import {createContentstackClient} from './contentstackservice'

export function createBlogClient() {
  return {
    api: createContentstackClient({
      key: config.api_key,
      token: config.delivery_token,
      environment: config.environment,
      region: 'US',
      branch: config.branch,
      preview: {
        enable: false,
        host: config.api_host,
        token: config.preview_token,
      },
    }),
  }
}
