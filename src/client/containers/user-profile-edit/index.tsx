// Dependencies
import React, { FC, ReactElement } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';
import { IFormData } from '@mobiera/containers/user-form/interfaces';
import { IUserProfileEditProps } from '@mobiera/containers/user-profile-edit/interfaces';

// Commons
import LOADING_TYPES from '@mobiera/commons/app';

// Containers
import UserForm from '@mobiera/containers/user-form';

// Components
import UserAvatar from '@mobiera/containers/user-profile/components/avatar';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';
import useShowAppLoader from '@mobiera/hooks/app-loader';

// Selectors
import { selectStatus } from './store/selectors';

// Actions
import userUpdate, { userReset } from './store/actions';

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
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const [showAppLoader] = useShowAppLoader();

  const onSubmit = (payload: IFormData) => {
    ((dispatch(userUpdate(payload)) as unknown) as Promise<null>).then(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userPayload } = payload;
      updateData({ user: userPayload });
      goBack();
    });
  };

  React.useEffect(() => {
    showAppLoader(LOADING_TYPES.LOADING === status);
  }, [status, showAppLoader]);

  React.useEffect(() => {
    return () => {
      dispatch(userReset());
    };
  }, [dispatch]);

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
