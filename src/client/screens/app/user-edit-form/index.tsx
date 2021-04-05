// Dependencies
import React, { ReactElement, FC } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Containers
import UserProfileEdit from '@mobiera/containers/user-profile-edit';

// Styles
import useStyles from './styles';

const HomeScreen: FC = (): ReactElement => {
  const { goBack } = useNavigation();
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title} h4>
        Edit profile
      </Text>
      <UserProfileEdit goBack={goBack} />
      <Button type="outline" title="Cancel" onPress={goBack} />
    </ScrollView>
  );
};

export default HomeScreen;
