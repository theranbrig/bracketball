import React from 'react';
import { View, Text, Button } from 'react-native';
import Layout from './Layout';

const PoolsScreen = props => (
  <Layout title={'Pools'}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pools Screen</Text>
      <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  </Layout>
);

export default PoolsScreen;
