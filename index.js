const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const { mocks } = require('./mockData')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Add the mocks to the schema.
// Now the hardcoded data in ./mockData will
// be overrided and the mocks will be used.
addMockFunctionsToSchema({ schema, mocks })

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}))

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});