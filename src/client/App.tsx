// Core configuration
import 'reflect-metadata';
import 'es6-shim';
import './core/icon';
import './core/tools/reactotron';

// Dependencies
import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Components
import StatusBar from '@mobiera/components/status-bar';

// Containers
import AuthProvider from '@mobiera/containers/auth-provider';
import AppContainer from '@mobiera/containers/app';

// Store
import store from './store';

// @Core
import { theme } from './core/theme';

// Styles
import useStyles from './styles';

const App = (): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';
  const containerBackgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const styles = useStyles({ containerBackgroundColor });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} useDark={isDarkMode}>
        <AuthProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar />
            <AppContainer />
          </SafeAreaView>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
