// SignUp.js
import React from 'react';
import { StyleSheet, TextInput, View, StatusBar } from 'react-native';
import { Button, Text, Icon, Container, Spinner } from 'native-base';
import gql from 'graphql-tag';
import Error from '../components/ErrorMessage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f5d75',
    padding: 10,
  },
  textInput: {
    height: 40,
    width: '90%',
    marginTop: 8,
    color: '#2d3142',
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  heading: {
    color: '#ef8354',
    fontSize: 60,
  },
  orangeButton: {
    marginLeft: '5%',
    margin: 10,
    width: '90%',
    backgroundColor: '#ef8354',
    borderColor: '#fefefe',
    borderWidth: 2,
  },
  transparentButton: {
    marginLeft: '5%',
    margin: 10,
    width: '90%',
    textAlign: 'center',
  },
  paragraph: {
    color: '#fefefe',
    width: '90%',
    textAlign: 'center',
    margin: 15,
    fontSize: 20,
  },
  orangeButtonText: {
    fontSize: 20,
  },
});

const LOGIN_USER_MUTATION = gql`
  mutation LOGIN_USER_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isSubmitting: false,
  };

  render() {
    const { email, password, isSubmitting } = this.state;
    const { history } = this.props;
    return (
      <Container>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.heading}>Grouper</Text>
          <Text style={styles.paragraph}>Login and start group shopping today.</Text>
          {loading && <Spinner color="#ef8354" />}
          {error && <Error error={error} />}
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={email}
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={password}
          />
          <Button
            block
            style={styles.orangeButton}
            onPress={async () => {
              await login();
              history.push('/');
            }}
          >
            <Text style={styles.orangeButtonText}>Log{loading && 'ging'} In</Text>
            <Icon name="md-arrow-round-forward" />
          </Button>
          <Button transparent light block style={styles.transparentButton} onPress={() => history.push('/signup')}>
            <Text style={styles.transparentButtonStyle}>Don't have an Account? Sign Up Now.</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default Login;
