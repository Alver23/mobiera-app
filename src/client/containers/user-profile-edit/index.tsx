// Dependencies
import React, { ReactElement, FC } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';
import { IUserProfileEditProps } from '@mobiera/containers/user-profile-edit/interfaces';

// Containers
import UserForm from '@mobiera/containers/user-form';

// Components
import UserAvatar from '@mobiera/containers/user-profile/components/avatar';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';
import useUserUpdate from './hooks';

// Form Schema
import formSchema from './form-schema';

// Styles
import useStyles from './styles';

const UserProfileEdit: FC<IUserProfileEditProps> = ({
  goBack,
}: IUserProfileEditProps): ReactElement => {
  const sessionData = useAuthSession();
  const user: IUser = sessionData.user as IUser;
  const updateData = sessionData.updateData as (values: any) => void;
  const styles = useStyles();
  const [, onSubmit] = useUserUpdate(user.id, goBack, updateData);

  return (
    <View style={styles.container}>
      <View>
        <UserAvatar image={user.avatar} />
        <View style={styles.iconContainer}>
          <Icon
            containerStyle={styles.icon}
            name="edit"
            type="material"
            size={32}
          />
        </View>
      </View>
      <UserForm
        formSchema={formSchema}
        defaultValues={user}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default UserProfileEdit;
