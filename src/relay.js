/* @flow */

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns the result as a Promise:
function fetchQuery(
  operation,
  variables,
  // cacheConfig,
  // uploadables,
) {
  return fetch(
    process.env.REACT_APP_API
      ? `${process.env.REACT_APP_API}/graphql`
      : 'https://graphql-demo.kriasoft.com/',
    {
      method: 'POST',
      headers: {
        // Add authentication and other headers here
        Accept: '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers':
          'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'no-cors',
      credentials: 'include',
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables,
      }),
    },
  ).then(response => response.json());
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
