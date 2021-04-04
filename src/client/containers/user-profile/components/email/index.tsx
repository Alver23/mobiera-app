// Dependencies
import React, { ReactElement, FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';

// Interfaces
import { IUserEmailProps } from './interfaces';

// Styles
import useStyles from './styles';

const UserEmail: FC<IUserEmailProps> = ({
  email,
  onPress,
}: IUserEmailProps): ReactElement => {
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={() => (onPress ? onPress(email) : null)}>
      <View style={styles.container}>
        <Icon name="email" type="material" size={24} />
        <Text style={styles.emailLabel}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserEmail;
