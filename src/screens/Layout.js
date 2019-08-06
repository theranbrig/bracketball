import React from 'react';
import { View, Text } from 'native-base';

const Layout = props => (
  <View>
    {props.children}
    <Text>Hi</Text>
  </View>
);

export default Layout;
