import React from 'react';
import { Container, Header, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import AppHeader from '../components/Header';

const Layout = props => (
  <Container>
    <AppHeader title={props.title} />
    <Content>{props.children}</Content>
  </Container>
);

export default withNavigation(Layout);
