// Dependencies
import React from 'react';

// Commons
import LOADING_TYPES from '@mobiera/commons/app';

// Hooks
import useShowAppLoader from '@mobiera/hooks/app-loader';

// Interfaces
import { IFormData } from '@mobiera/containers/user-form/interfaces';

// Actions
import userUpdate, { userReset } from '../store/actions';

export const useMount = (status: LOADING_TYPES): void => {
  const [showAppLoader] = useShowAppLoader();
  React.useEffect(() => {
    showAppLoader(LOADING_TYPES.LOADING === status);
  }, [status, showAppLoader]);
};

export const useUnmount = (dispatch: React.Dispatch<any>): void => {
  React.useEffect(() => {
    return () => {
      dispatch(userReset());
    };
  }, [dispatch]);
};

export const useOnSubmitForm = (
  dispatch: React.Dispatch<any>,
  updateData: (values: any) => void,
  goBack: () => void
): ((payload: IFormData) => void) => {
  return React.useCallback(
    (payload: IFormData) => {
      ((dispatch(userUpdate(payload)) as unknown) as Promise<null>).then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userPayload } = payload;
        updateData({ user: userPayload });
        goBack();
      });
    },
    [dispatch, goBack, updateData]
  );
};

export const useChangeAvatar = (
  initialState = ''
): [string, (error: string) => void, (response: any) => void] => {
  const [avatar, setAvatar] = React.useState<string>(initialState);
  const onChangeAvatar = React.useCallback((response: any) => {
    const { uri } = response;
    setAvatar(uri);
  }, []);

  const onError = React.useCallback(
    (response: any) => console.log(response),
    []
  );
  return [avatar, onError, onChangeAvatar];
};
