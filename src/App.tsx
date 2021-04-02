// Core configuration
import './core/icon';
import './core/tools/reactotron';

// Dependencies
import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, Text } from 'react-native-elements';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Components
import StatusBar from '@mobiera/components/status-bar';

// Containers
import AuthProvider from '@mobiera/containers/auth-provider';

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
      <ThemeProvider theme={theme} useDark={isDarkMode}>
        <AuthProvider>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar />
            <View>
              <Text>App Mobiera</Text>
            </View>
          </SafeAreaView>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
