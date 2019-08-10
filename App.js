import React from 'react';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import PoolsScreen from './src/screens/PoolsScreen';
import StandingsScreen from './src/screens/StandingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const MainContent = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />,
      },
    },
    Pools: {
      screen: PoolsScreen,
      navigationOptions: {
        tabBarLabel: 'Pools',
        tabBarIcon: ({ tintColor }) => <Icon name="basketball" size={20} color={tintColor} />,
      },
    },
    Standing: {
      screen: StandingsScreen,
      navigationOptions: {
        tabBarLabel: 'Standings',
        tabBarIcon: ({ tintColor }) => <Icon name="format-list-numbered" size={20} color={tintColor} />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="account" size={20} color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        backgroundColor: '#171F33', // TabBar background
      },
    },
  }
);

const AuthRoutes = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
})

const App = createSwitchNavigator({
  Auth: {
    screen: AuthRoutes
  },
  Main: {
    screen: MainContent
  },
})

export default createAppContainer(App);
