import { gql } from '@apollo/client/core/core.cjs';

export const IndexPageQuery = gql`
  query IndexPage($uid: String!, $locale: String!) {
    page(uid: $uid, locale: $locale) {
      title
      content
    }
  }
`;