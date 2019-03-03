import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Image {
    id: Int!,
    title: String!
    url: String!
    liked: Boolean
  }

  type Query {
    images(userEmail: String!, fromId: Int): [Image]
    likedImages(userEmail: String!): [Image]
  }

  type Mutation {
    like(userEmail: String!, imageId: Int!): Image
    addImage(userEmail: String!, url: String!, title: String): Image
  }
`);

export default schema;
