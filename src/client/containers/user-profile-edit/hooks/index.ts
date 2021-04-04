// Dependencies
import React from 'react';

// Hooks
import useShowAppLoader from '@mobiera/hooks/app-loader';

// Services
import UserServices from '@mobiera/services/user';

// Interfaces
import { IFormData } from '@mobiera/containers/user-form/interfaces';
import { IUserUpdateRequest } from '@mobiera/services/user/interfaces';

const useUserUpdate = (
  id: number,
  callback: () => void,
  updateData: (values: any) => void
): [string | undefined, (payload: IFormData) => void] => {
  const [showAppLoader] = useShowAppLoader();
  const [message, setMessage] = React.useState<string>();

  const onSubmit = React.useCallback(
    (payload: IFormData) => {
      const onSuccess = () => {
        setMessage('The user was updated successfully');
        showAppLoader(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userPayload } = payload;
        updateData({ user: userPayload });
        callback();
      };

      const onError = () => {
        setMessage('An error has occurred, please try again later');
        showAppLoader(false);
      };

      showAppLoader(true);
      UserServices.update(id, payload as IUserUpdateRequest)
        .then(onSuccess)
        .catch(onError);
    },
    [id, showAppLoader, callback, updateData]
  );

  return [message, onSubmit];
};

export default useUserUpdate;
