// Dependencies
import React from 'react';

const usePasswordState = (
  initialState = true
): [string, boolean, () => void] => {
  const [showPassword, setShowPassword] = React.useState<boolean>(initialState);
  const iconsMapper: any = {
    true: 'eye',
    false: 'eye-slash',
  };
  const icon = iconsMapper[`${showPassword}`];

  const onChangeSetPassword = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return [icon, showPassword, onChangeSetPassword];
};

export default usePasswordState;
