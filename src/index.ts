import { ApolloServer, gql } from 'apollo-server';
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';
import dotenv from 'dotenv-safe';
import { IApolloServerContext } from './interfaces/IApolloServerContext';
import schema from '@src/graphql/schema/schema';
import { performAstCodegen } from '@src/codegen';
import prisma from '@src/prisma/client';

dotenv.config();

const startServer = () => {
  performAstCodegen();

  const context: IApolloServerContext = {
    prisma,
  };

  const server = new ApolloServer({
    schema,
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    context,
  });

  server
    .listen()
    .then(({ url }) => {
      console.log(`Server ready at ${url}graphql`);
    })
    .catch(err => console.log(`Error launching server`, err));
};

startServer();
