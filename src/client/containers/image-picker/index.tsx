// Dependencies
import React, { ReactElement, forwardRef, ForwardedRef } from 'react';
import { CameraOptions } from 'react-native-image-picker';
import ActionSheet from '@alessiocancian/react-native-actionsheet';

// Commons
import getImagePickerOptions from './commons';

// Interfaces
import { CustomImagePickerProps } from './interfaces';

const CustomImagePicker = forwardRef(
  (
    props: CustomImagePickerProps,
    ref: ForwardedRef<typeof ActionSheet>
  ): ReactElement => {
    const { onSelected, onError } = props;
    const imagePickerOptions = getImagePickerOptions();

    const optionSheetSelected = (indexSelected: number) => {
      const { action, options } = imagePickerOptions[indexSelected];
      if (action) {
        action(options as CameraOptions, ({ didCancel, ...response }) => {
          const callbackMapper: any = {
            true: onError,
            DEFAULT: onSelected,
          };
          if (!didCancel) {
            const callback =
              callbackMapper[`${Boolean(response.errorCode)}`] ||
              callbackMapper.DEFAULT;
            callback(response);
          }
        });
      }
    };

    return (
      <>
        <ActionSheet
          ref={ref as any}
          title={'Which one do you like ?'}
          options={imagePickerOptions.map(({ name }) => name)}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={optionSheetSelected}
        />
      </>
    );
  }
);

CustomImagePicker.displayName = 'CustomImagePicker';

export default CustomImagePicker;
