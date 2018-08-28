import Express from 'express'
import path from 'path'
import proxy from 'http-proxy-middleware'

import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router'

import ApolloClient from 'apollo-client'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import fetch from 'node-fetch'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'

import { queryOrMutationLink } from './links'

import App from './App'
import Html from 'routes/Html'

let PORT = 3001
if (process.env.PORT) {
  PORT = parseInt(process.env.PORT, 10)
}

const API_HOST =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3010'
    : 'https://benki.ooo/api'

const app = new Express()

if (process.env.NODE_ENV === 'production') {
  // In production we want to serve our JS from a file on the filesystem.
  app.use('/static', Express.static(path.join(process.cwd(), 'build/static')))
} else {
  // Otherwise we want to proxy the webpack development server.
  app.use(
    '/static',
    proxy({target: 'http://localhost:3020', pathRewrite: {'^/static': ''}}),
  )
}
const links = [
  queryOrMutationLink({
    fetch,
    uri: API_HOST,
  }),
]
// support APQ in production
if (process.env.NODE_ENV === 'production') {
  links.unshift(createPersistedQueryLink())
}
app.use((req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from(links),
    cache: new InMemoryCache(),
  })

  const context = {}

  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  )

  renderToStringWithData(component)
    .then(content => {
      res.status(200)
      const html = <Html content={content} client={client} />
      res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`)
      res.end()
    })
    .catch(e => {
      console.error('RENDERING ERROR:', e) // eslint-disable-line no-console
      res.status(500)
      res.end(
        `An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${
          e.stack
          }`,
      )
    })
})

app.listen(PORT, () =>
// eslint-disable-next-line no-console
    console.log(
      // eslint-disable-line no-console
      `App Server is now running on http://localhost:${PORT}`,
    ),
)
