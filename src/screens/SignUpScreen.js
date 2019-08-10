import React from 'react';
import { View, Text, Button } from 'native-base';

const SignUpScreen = props => (
  <View>
    <Text>Sign Up</Text>
    <Button onPress={() => props.navigation.navigate('Login')}>
      <Text>To Login</Text>
    </Button>
    <Button onPress={() => props.navigation.navigate('Main')}>
      <Text>To Home</Text>
    </Button>
  </View>
);

export default SignUpScreen;
