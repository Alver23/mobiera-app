// Dependencies
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Redux Actions
import appShowLoaderAction from '@mobiera/store/actions/globals';

const useShowAppLoader = (): [(show: boolean) => void] => {
  const dispatch = useDispatch();
  const callback = useCallback(
    (show: boolean) => {
      return dispatch(appShowLoaderAction(show));
    },
    [dispatch]
  );

  return [callback];
};

export default useShowAppLoader;
