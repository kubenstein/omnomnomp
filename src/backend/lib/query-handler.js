import { graphql } from 'graphql';
import { schema, resolvers } from '../graphql';

export default function queryHandler(query, _email) {
  return graphql(schema, query, resolvers);
}
