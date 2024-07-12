import { PageServerLoad } from '@analogjs/router';
import { createClient } from '../../lib/contentstack/contentstack.client';
import { getQuery } from 'h3';
import { IndexPageQuery } from './index.page.gql';

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  const query:any = getQuery(event);
  const pageEntryId = 'blt2fbaef3144631a4b';
  const locale = 'en-us';

  console.log('query', query);

  const response = await createClient().gql.query({
    query: IndexPageQuery,
    variables: {
      uid: pageEntryId,
      locale,
    }
  })
  
  console.log('response', response);

  return {
    cstk: response?.data?.page,
    loaded: true,
  };
};