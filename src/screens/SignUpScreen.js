import React, { useState } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label } from 'native-base';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SIGNUP_MUTATION = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      id
      username
      password
    }
  }
`;

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [signup, { data }] = useMutation(SIGNUP_MUTATION);
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email Address</Label>
            <Input
              keyboardType="email-address"
              value={email}
              onChange={email => setEmail(email)}
              textContentType="email"
              autoCapitalize="none"
            />
          </Item>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input type="text" value={username} onChange={username => setUsername(username)} autoCapitalize="none" />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              value={password}
              onChange={password => setPassword(password)}
              secureTextEntry={true}
              textContentType="password"
              autoCapitalize="none"
            />
          </Item>
          <Button
            onSubmit={() => {
              signup({ variables: { email, username, password } });
              console.log(data);
            }}
          >
            <Text>Sign Up</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
export default SignUpPage;
