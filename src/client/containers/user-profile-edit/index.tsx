// Dependencies
import React, { FC, ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';
import { IUserProfileEditProps } from '@mobiera/containers/user-profile-edit/interfaces';

// Containers
import UserForm from '@mobiera/containers/user-form';

// Components
import CustomImagePicker from '@mobiera/containers/image-picker';
import UserAvatar from '@mobiera/containers/user-profile/components/avatar';

// Hooks
import useImagePicker from '@mobiera/containers/image-picker/hooks';
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';
import {
  useMount,
  useUnmount,
  useOnSubmitForm,
  useChangeAvatar,
} from './hooks';

// Selectors
import { selectStatus } from './store/selectors';

// Form Schema
import formSchema from './form-schema';

// Hooks

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
  const onSubmit = useOnSubmitForm(dispatch, updateData, goBack);
  const [actionSheetRef, openImagePicker] = useImagePicker();
  const [avatar, onError, onSelected] = useChangeAvatar(user.avatar);

  useMount(status);
  useUnmount(dispatch);

  return (
    <View style={styles.container}>
      <View>
        <UserAvatar image={avatar} />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={openImagePicker}>
            <Icon
              containerStyle={styles.icon}
              name="edit"
              type="material"
              size={32}
            />
          </TouchableOpacity>
        </View>
      </View>
      <UserForm
        formSchema={formSchema}
        defaultValues={user}
        onSubmit={onSubmit}
      />
      <CustomImagePicker
        ref={actionSheetRef}
        onError={onError}
        onSelected={onSelected}
      />
    </View>
  );
};

export default UserProfileEdit;
