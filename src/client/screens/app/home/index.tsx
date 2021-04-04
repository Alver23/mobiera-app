// Dependencies
import React, { ReactElement, FC } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';

// Containers
import UserProfile from '@mobiera/containers/user-profile';

// Styles
import useStyles from './styles';

const HomeScreen: FC = (): ReactElement => {
  const { logout } = useAuthSession();
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <UserProfile />
      </View>
      <Button title="Logout" onPress={logout} />
    </ScrollView>
  );
};

export default HomeScreen;
