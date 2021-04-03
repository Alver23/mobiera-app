// Dependencies
import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';

const HomeScreen: FC = (): ReactElement => {
  const { logout } = useAuthSession();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
