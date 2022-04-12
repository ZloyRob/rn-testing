import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateAccount from './App/screens/CreateAccount';
import SignIn from './App/screens/SignIn';

const AppNavigator = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <AppNavigator.Navigator>
      <AppNavigator.Screen name="CreateAccount" component={CreateAccount} />
      <AppNavigator.Screen name="SignIn" component={SignIn} />
    </AppNavigator.Navigator>
  </NavigationContainer>
);
