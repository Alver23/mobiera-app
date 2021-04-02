// Dependencies
import React, { ReactElement } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'react-native-elements';

// Components
import StatusBar from '@mobiera/components/status-bar';

// Styles
import useStyles from './styles';

const Loader = (): ReactElement => {
  const styles = useStyles();
  const { theme }: any = useTheme();
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
      <StatusBar />
    </View>
  );
};

export default Loader;
