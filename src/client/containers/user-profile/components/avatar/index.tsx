// Dependencies
import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

// Interfaces
import { IUserAvatarProps } from '@mobiera/containers/user-profile/components/avatar/interfaces';

// Styles
import useStyles from './styles';

const UserAvatar: FC<IUserAvatarProps> = ({
  image,
}: IUserAvatarProps): ReactElement => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Avatar
        containerStyle={styles.avatarContainer}
        size="xlarge"
        rounded
        source={{ uri: image }}
      />
    </View>
  );
};

export default UserAvatar;
