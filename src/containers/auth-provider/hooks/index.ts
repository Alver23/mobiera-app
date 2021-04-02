// Dependencies
import React from 'react';

// Interfaces
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
  }, [initialState]);

  React.useEffect((): void => {
    setData((prevstate) => ({
      ...prevstate,
      initialize: true,
    }));
  }, []);

  return [data, logout];
};

export const useAuthSession = (): IAuthContext => {
  return React.useContext<IAuthContext>(AuthContext);
};

export default useAuth;
