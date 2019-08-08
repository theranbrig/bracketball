import React from 'react';
import { Container, Content } from 'native-base';
import AppHeader from '../components/Header';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://localhost:4444',
});

const Layout = props => (
  <ApolloProvider client={client}>
    <Container>
      <AppHeader title={props.title} />
      <Content>{props.children}</Content>
    </Container>
  </ApolloProvider>
);

export default Layout;
