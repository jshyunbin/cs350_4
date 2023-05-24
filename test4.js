const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define your root resolver
const root = {
  hello: () => {
    return 'Hello, World!';
  },
};

// Create an Express server
const app = express();
const port = 3000;

// Define the GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable the GraphiQL interface for testing
  })
);

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}/graphql`);
});

