// Dependencies
import React, { ReactElement, FC } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '@mobiera/screens/app/home';
import UserEditForm from '@mobiera/screens/app/user-edit-form';

const Stack = createStackNavigator();

const themeConfiguration = {
  ...DefaultTheme,
};

const AppStack: FC = (): ReactElement => {
  return (
    <NavigationContainer theme={themeConfiguration}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="edit-user"
          component={UserEditForm}
          options={{ title: 'Edit form' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
