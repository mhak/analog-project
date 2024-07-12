import { config } from '../../environments/environment'
import {createContentstackClient} from './contentstack.service'
import { createApolloClient } from '../apollo/apollo'
import { createURL } from '../http'
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
    gql: createApolloClient({
      url: createURL(config.api_key, {
        origin: config.graphql_url,
        search: {
          environment: config.environment,
        },
      }),
      headers: {
        [`branch`]: config.branch,
        [`access_token`]: config.delivery_token,
      },
    }),
  }
}
