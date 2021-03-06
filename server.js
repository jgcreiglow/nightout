import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'
import User from './models/user'
import Itinerary from './models/itinerary'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nightout"
);

const PORT = process.env.PORT || 3001
const app = express()
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { User, Itinerary } })
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT)

console.log(`YASS QUEEN ON PORT: ${PORT}`)
