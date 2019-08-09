import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import PoolsScreen from './src/screens/PoolsScreen';
import StandingsScreen from './src/screens/StandingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const TabNavigator = createBottomTabNavigator(
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
        style: {
          backgroundColor: '#171f33',
        },
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

// const AppModalStack = createStackNavigator(
//   {
//     App: MainDrawer,
//     Promotion1: {
//       screen: Example,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

// const App = createSwitchNavigator({
//   Loading: {
//     screen: Example,
//   },
//   Auth: {
//     screen: AuthStack,
//   },
//   App: {
//     screen: AppModalStack,
//   },
// });

// export default createAppContainer(App);
// Final Navigator Code
// Our final code.

// index.js

// import React from 'react';
// import {
//   createAppContainer,
//   createBottomTabNavigator,
//   createDrawerNavigator,
//   createStackNavigator,
//   createSwitchNavigator,
// } from 'react-navigation';

// import Example from './screens/Example';

// const AuthStack = createStackNavigator({
//   Landing: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Landing',
//     },
//   },
//   SignIn: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Sign In',
//     },
//   },
//   CreateAccount: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Create Account',
//     },
//   },
//   ForgotPassword: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Forgot Password',
//     },
//   },
//   ResetPassword: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Reset Password',
//     },
//   },
// });

// const FeedStack = createStackNavigator({
//   Feed: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Feed',
//     },
//   },
//   Details: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Details',
//     },
//   },
// });

// const SearchStack = createStackNavigator({
//   Search: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Search',
//     },
//   },
//   Details: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Details',
//     },
//   },
// });

// const DiscoverStack = createStackNavigator({
//   Discover: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Discover',
//     },
//   },
//   Details: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Details',
//     },
//   },
// });

// const MainTabs = createBottomTabNavigator({
//   Feed: {
//     screen: FeedStack,
//     navigationOptions: {
//       tabBarLabel: 'Feed',
//     },
//   },
//   Search: {
//     screen: SearchStack,
//     navigationOptions: {
//       tabBarLabel: 'Search',
//     },
//   },
//   Discover: {
//     screen: DiscoverStack,
//     navigationOptions: {
//       tabBarLabel: 'Discover',
//     },
//   },
// });

// const SettingsStack = createStackNavigator({
//   SettingsList: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Settings List',
//     },
//   },
//   Profile: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: 'Profile',
//     },
//   },
// });

// const MainDrawer = createDrawerNavigator({
//   MainTabs: MainTabs,
//   Settings: SettingsStack,
// });

// const AppModalStack = createStackNavigator(
//   {
//     App: MainDrawer,
//     Promotion1: {
//       screen: Example,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

// const App = createSwitchNavigator({
//   Loading: {
//     screen: Example,
//   },
//   Auth: {
//     screen: AuthStack,
//   },
//   App: {
//     screen: AppModalStack,
//   },
// });

// export default createAppContainer(App);

export default createAppContainer(TabNavigator);
