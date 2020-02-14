import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen'
import SignInScreen from './pages/SignInScreen'
import AuthLoading  from './pages/AuthLoading'

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
);
