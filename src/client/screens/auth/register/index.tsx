// Dependencies
import React, { ReactElement, FC } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Containers
import RegisterForm from '@mobiera/containers/register-form';

// Styles
import useStyles from './styles';

const RegisterScreen: FC = (): ReactElement => {
  const { goBack } = useNavigation();
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title} h3>
        Get started
      </Text>
      <RegisterForm />
      <Button title="Log in" type="outline" onPress={() => goBack()} />
    </ScrollView>
  );
};

export default RegisterScreen;
