import React from 'react';
import { View, Text, Button } from 'native-base';

const LoginScreen = props => (
  <View>
    <Text>Login</Text>
    <Button onPress={() => props.navigation.navigate('Main')}>
      <Text>To Home</Text>
    </Button>
    <Button onPress={() => props.navigation.navigate('SignUp')}>
      <Text>To Sign Up</Text>
    </Button>
  </View>
);

export default LoginScreen;
