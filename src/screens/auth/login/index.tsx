// Dependencies
import React, { ReactElement, FC } from 'react';
import { ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Containers
import LoginForm from '@mobiera/containers/login-form';

// Styles
import useStyles from './styles';

const LoginScreen: FC = (): ReactElement => {
  const { navigate } = useNavigation();
  const styles = useStyles();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} h3>
        Log in to your account
      </Text>
      <LoginForm />
      <Button
        type="outline"
        title="Sign up"
        onPress={() => navigate('Register')}
      />
    </ScrollView>
  );
};

export default LoginScreen;
