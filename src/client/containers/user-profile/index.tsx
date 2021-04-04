// Dependencies
import React, { ReactElement, FC } from 'react';
import { View, Linking } from 'react-native';
import { Text, Card } from 'react-native-elements';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';

// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';

// Components
import UserAvatar from './components/avatar';
import UserEmail from './components/email';

// Styles
import useStyles from './styles';

const UserProfile: FC = (): ReactElement => {
  const styles = useStyles();
  const sessionData = useAuthSession();
  const user: IUser = sessionData.user as IUser;

  const onPressEmail = (email: string): void => {
    Linking.openURL(
      `mailto://${email}?subject=subject&body=body`
    ).catch((err) => console.log('Error:', err));
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={[styles.cardContainer, styles.backgroundBlack]}>
        <UserAvatar image={user.avatar} />
      </Card>
      <Card
        containerStyle={[styles.cardContainer, styles.cardUserInfoContainer]}
      >
        <Text style={styles.text} h4>
          {user?.name}
        </Text>
        <UserEmail onPress={onPressEmail} email={user.email} />
      </Card>
    </View>
  );
};

export default UserProfile;
