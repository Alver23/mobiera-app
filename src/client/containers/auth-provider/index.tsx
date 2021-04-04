// Dependencies
import React, { FC, ReactElement } from 'react';

// Components
import Loader from '@mobiera/components/loader';

// Contexts
import AuthContext from './context';

// Hooks
import useAuth from './hooks';

// Interfaces
import IAuthProviderProps from './interfaces';

const AuthProvider: FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps): ReactElement => {
  const [data, logout] = useAuth();
  const { initialize } = data;
  return (
    <AuthContext.Provider value={{ ...data, logout }}>
      {initialize ? children : <Loader isVisible />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
