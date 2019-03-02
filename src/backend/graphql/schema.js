import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Image {
    redditPostUrl: String!
    title: String!
    url: String!
    liked: Boolean
  }

  type Query {
    images(userEmail: String!): [Image]
    likedImages(userEmail: String!): [Image]
  }
`);

export default schema;
