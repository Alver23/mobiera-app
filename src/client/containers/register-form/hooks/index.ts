// Dependencies
import React from 'react';

// Hooks
import useShowAppLoader from '@mobiera/hooks/app-loader';

// Services
import UserServices from '@mobiera/services/user';

// Interfaces
import { IFormData } from '../interfaces';

const useSignUp = (
  callback: () => void
): [string | undefined, (payload: IFormData) => void] => {
  const [showAppLoader] = useShowAppLoader();
  const [message, setMessage] = React.useState<string>();

  const onSubmit = React.useCallback(
    (payload: IFormData) => {
      const onSuccess = () => {
        setMessage('The user was created successfully');
        showAppLoader(false);
        callback();
      };

      const onError = () => {
        setMessage('An error has occurred, please try again later');
        showAppLoader(false);
      };

      showAppLoader(true);
      UserServices.save(payload).then(onSuccess).catch(onError);
    },
    [showAppLoader, callback]
  );

  return [message, onSubmit];
};

export default useSignUp;
