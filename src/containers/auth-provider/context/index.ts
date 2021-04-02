// Dependencies
import React from 'react';

// interfaces
import IAuthContext from './interfaces';

const AuthContext: React.Context<IAuthContext> = React.createContext(
  {} as IAuthContext
);

export default AuthContext;
