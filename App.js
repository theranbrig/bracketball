import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const HomeScreen = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Go to Details" onPress={() => props.navigation.navigate('Details')} />
    <Button title="Go back" onPress={() => props.navigation.goBack()} />
  </View>
);

const DetailsScreen = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => props.navigation.goBack()} />
  </View>
);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Details',
  }
);

export default createAppContainer(AppNavigator);
