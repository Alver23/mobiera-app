// Dependencies
import React, { ReactElement, FC } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';

// Containers
import UserProfile from '@mobiera/containers/user-profile';

// Styles
import useStyles from './styles';

const HomeScreen: FC = (): ReactElement => {
  const { logout } = useAuthSession();
  const { navigate } = useNavigation();
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <UserProfile />
      </View>
      <Button
        buttonStyle={styles.buttonContainer}
        type="outline"
        title="Logout"
        onPress={logout}
      />
      <Button
        buttonStyle={styles.buttonContainer}
        title="Edit Profile"
        onPress={() => navigate('edit-user')}
      />
    </ScrollView>
  );
};

export default HomeScreen;
