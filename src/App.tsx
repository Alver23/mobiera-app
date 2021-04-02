// Core configuration
import './core/icon';

// Dependencies
import React, { ReactElement } from 'react';
import { ThemeProvider, Text } from 'react-native-elements';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

// @Core
import { theme } from './core/theme';

const App = (): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View>
          <Text>App Mobiera</Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
