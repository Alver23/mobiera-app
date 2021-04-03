// Dependencies
import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen: FC = (): ReactElement => {
  const { goBack } = useNavigation();
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button title="Log in" type="outline" onPress={() => goBack()} />
    </View>
  );
};

export default RegisterScreen;
