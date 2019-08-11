import React from 'react';
import { Container, Content } from 'native-base';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserProvider from '../utilities/UserContext';
import AppHeader from '../components/Header';

const client = new ApolloClient({
  uri: 'https://localhost:4444',
});

const Layout = props => (
  <ApolloProvider client={client}>
    <UserProvider>
      <Container styles={{ 'margin-top': '60' }}>
        <Content>{props.children}</Content>
      </Container>
    </UserProvider>
  </ApolloProvider>
);

export default Layout;
