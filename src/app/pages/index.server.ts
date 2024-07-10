import { PageServerLoad } from '@analogjs/router';
import { createClient } from '../../lib/contentstack/contentstack.client'
import { getQuery } from 'h3'

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {

  const client = createClient();
  const query:any = getQuery(event);

  console.log('query', query);

  const response = await client.api.find<any>('page', query, (query) => {
    return query.where('url', '/').toJSON()
  })
  
  console.log('response', response[0]);

  return {
    cstk: response[0],
    loaded: true,
  };
};