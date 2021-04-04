// Dependencies
import React, { ReactElement, FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme, Overlay } from 'react-native-elements';

// Interfaces
import { ILoaderProps } from './interfaces';

// Styles
import useStyles from './styles';

const Loader: FC<ILoaderProps> = ({
  isVisible,
}: ILoaderProps): ReactElement => {
  const styles = useStyles();
  const { theme }: any = useTheme();
  return (
    <Overlay isVisible={isVisible} overlayStyle={styles.container}>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
    </Overlay>
  );
};

export default Loader;
