// Core configuration
import './core/icon';
import './core/tools/reactotron';

// Dependencies
import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, Text } from 'react-native-elements';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Store
import store from '@mobiera/store';

// @Core
import { theme } from './core/theme';

const App = (): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View>
            <Text>App Mobiera</Text>
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
