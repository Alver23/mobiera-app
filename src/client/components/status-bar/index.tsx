// Dependencies
import React, { ReactElement, FC } from 'react';
import * as RNModules from 'react-native';

const StatusBarComponent: FC = (): ReactElement => {
  const isDarkMode = RNModules.useColorScheme() === 'dark';
  return (
    <RNModules.StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    />
  );
};

export default StatusBarComponent;
