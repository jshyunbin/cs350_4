import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import cookieParser from 'cookie-parser';

// GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// GraphQL resolver
const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, World!';
    },
  },
};

// Create an Express server
const app = express();
const port = 3000;

// Use cookie-parser middleware
app.use(cookieParser());

// Create an ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Access the cookies in the context
    const cookies = req.cookies;

    // Do cookie validation or other checks here
    // ...

    // Return the context object
    return { cookies };
  },
});

// Apply the ApolloServer middleware to the Express app
server.applyMiddleware({ app });

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}${server.graphqlPath}`);
});

