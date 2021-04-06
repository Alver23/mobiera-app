// Dependencies
import React from 'react';

const useImagePicker = (): [any, () => void] => {
  const actionSheetRef: any = React.useRef();
  const openImagePicker = React.useCallback(() => {
    actionSheetRef.current.show();
  }, []);

  return [actionSheetRef, openImagePicker];
};

export default useImagePicker;
