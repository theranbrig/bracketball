import React from 'react';
import { Container, Content } from 'native-base';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserProvider from '../utilities/UserContext';

const Layout = props => <Content>{props.children}</Content>;

export default Layout;
