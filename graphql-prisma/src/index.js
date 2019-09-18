import {
  GraphQLServer,
  PubSub
} from 'graphql-yoga'
import db from './db'
import { resolvers, fragmentReplacements } from './resolvers/index'
import prisma from './prisma'

const pubsub = new PubSub()

const context = (request) => {
  return {
    db,
    pubsub,
    prisma,
    request
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context,
  fragmentReplacements
})

server.start(() => {
  console.log('Running')
})