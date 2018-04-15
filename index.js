const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}))

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});