import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from './Layout';

const HomeScreen = props => (
  <Layout title={'Home'}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => props.navigation.navigate('Details')} />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  </Layout>
);

export default HomeScreen;
