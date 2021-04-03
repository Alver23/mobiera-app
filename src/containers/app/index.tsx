// Dependencies
import React, { ReactElement, FC } from 'react';
import { useSelector } from 'react-redux';

// Components
import Loader from '@mobiera/components/loader';

// Hooks
import { useAuthSession } from '@mobiera/containers/auth-provider/hooks';

// Navigation
import AppStack from '@mobiera/navigation/app-stack';
import AuthStack from '@mobiera/navigation/auth-stack';

// Selectors
import { selectAppLoader } from '@mobiera/store/selectors/globals';

const AppContainer: FC = (): ReactElement => {
  const { authenticated } = useAuthSession();
  const showLoader = useSelector(selectAppLoader);
  return (
    <>
      <Loader isVisible={showLoader} />
      {authenticated && <AppStack />}
      {!authenticated && <AuthStack />}
    </>
  );
};

export default AppContainer;
