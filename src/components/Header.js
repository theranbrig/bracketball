import React from 'react';
import { Header, Button, Left, Body, Right, Icon, Text, Title } from 'native-base';
import { withNavigation } from 'react-navigation';

const AppHeader = props => (
  <Header style={{ backgroundColor: '#171f33' }} iosBarStyle="light-content">
    <Left/>
    <Body style={{ textAlign: 'center' }}>
      <Title style={{ color: '#f8f8f8' }}>{props.title}</Title>
    </Body>
    <Right />
  </Header>
);

export default withNavigation(AppHeader);
