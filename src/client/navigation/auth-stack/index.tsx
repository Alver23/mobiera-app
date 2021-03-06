// Dependencies
import React, { ReactElement, FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from '@mobiera/screens/auth/login';
import RegisterScreen from '@mobiera/screens/auth/register';

const Stack = createStackNavigator();

const AuthStack: FC = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Log in' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Sign up' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
