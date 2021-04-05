// Dependencies
import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import UserForm from '@mobiera/containers/user-form';

// Form Schema
import formSchema from './form-schema';

// Hooks
import useSignUp from './hooks';

// Styles
import useStyles from './styles';

const RegisterForm: FC = (): ReactElement => {
  const styles = useStyles();

  const [message, onSubmit] = useSignUp();

  return (
    <View style={styles.container}>
      <UserForm formSchema={formSchema} onSubmit={onSubmit}>
        {message && (
          <View style={styles.textErrorContainer}>
            <Text style={styles.textError}>{message}</Text>
          </View>
        )}
      </UserForm>
    </View>
  );
};

export default RegisterForm;
