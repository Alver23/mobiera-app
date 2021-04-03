// Dependencies
import React from 'react';

// Commons
import {
  clearAuthData,
  getAuthData,
} from '@mobiera/containers/login-form/commons';

// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';
import IMutableRefObject from '@mobiera/interfaces/mutable-ref';
import IAuthContext from '../context/interfaces';

// Contexts
import AuthContext from '../context';

const useAuth = (): [IAuthContext, () => void] => {
  const initialState: IAuthContext = React.useMemo(
    () => ({
      authenticated: false,
      initialize: false,
    }),
    []
  );

  const [data, setData] = React.useState<IAuthContext>(initialState);
  const isMounted: IMutableRefObject<boolean> = React.useRef(true);

  React.useEffect(() => {
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  const logout: () => void = React.useCallback((): void => {
    setData({ ...initialState, initialize: true });
    clearAuthData().then();
  }, [initialState]);

  React.useEffect((): void => {
    const setAuthData = (user: IUser) => {
      if (isMounted.current) {
        setData({
          user,
          initialize: true,
          authenticated: !!user,
        });
      }
    };

    const setError = () => {
      if (isMounted.current) {
        setData(initialState);
      }
    };

    getAuthData().then(setAuthData).catch(setError);
  }, [initialState]);

  return [data, logout];
};

export const useAuthSession = (): IAuthContext => {
  return React.useContext<IAuthContext>(AuthContext);
};

export default useAuth;
