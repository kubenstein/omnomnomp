import graphqlHTTP from 'express-graphql';
import Server from './server';
import { schema, resolvers } from './graphql';


const server = new Server({
  port: 8081,
});

server.app.use('/graphql-explorer', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

server.start();
