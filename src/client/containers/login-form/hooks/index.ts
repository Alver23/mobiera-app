// Dependencies
import React from 'react';
import RNRestart from 'react-native-restart';

// Hooks
import useShowAppLoader from '@mobiera/hooks/app-loader';
import useStateAction from '@mobiera/hooks/state-action';

// Services
import authenticationService from '@mobiera/services/authentication';

// Commons
import { setAuthData } from '../commons';

// Interfaces
import { IFormData } from '../interfaces';

const useAuthentication = (): [boolean, (values: IFormData) => void] => {
  const [showAppLoader] = useShowAppLoader();
  const [error, showError, hideError] = useStateAction();

  const onSubmit = React.useCallback(
    (values) => {
      showAppLoader(true);
      hideError();
      authenticationService
        .login(values)
        .then(async (data) => {
          await setAuthData(data);
          hideError();
          showAppLoader(false);
          RNRestart.Restart();
        })
        .catch(() => {
          showError();
          showAppLoader(false);
        });
    },
    [showAppLoader, showError, hideError]
  );

  return [error, onSubmit];
};

export default useAuthentication;
