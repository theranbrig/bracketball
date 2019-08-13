import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigator from './src/utilities/Navigator';

const client = new ApolloClient({
  uri: 'http://localhost:4444',
});

const App = props => {
  console.log(client);
  return (
    <ApolloProvider client={client}>
      <Navigator />
    </ApolloProvider>
  );
};

export default App;
