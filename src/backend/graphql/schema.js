import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Image {
    id: Int!,
    redditPostUrl: String!
    title: String!
    url: String!
    liked: Boolean
  }

  type Query {
    images(userEmail: String!, fromId: Int): [Image]
    likedImages(userEmail: String!): [Image]
  }
`);

export default schema;
