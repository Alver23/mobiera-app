// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ActionSheet from '@alessiocancian/react-native-actionsheet';

// Commons
import * as ImagePickercommons from '../commons';

// Under test file
import CustomImagePicker from '../index';

describe('<CustomImagePicker />', () => {
  let component: ShallowWrapper;

  const props = {
    onSelected: jest.fn(),
    onError: jest.fn(),
  };

  const responseMock = {
    didCancel: false,
    errorCode: undefined,
    uri: 'http://localhost',
  };

  const options: any = [
    {
      name: 'fake action',
      options: {},
      action: jest
        .fn()
        .mockImplementationOnce((_, callback) => callback(responseMock))
        .mockImplementationOnce((_, callback) =>
          callback({ ...responseMock, didCancel: true })
        ),
    },
    {},
  ];

  beforeEach(() => {
    jest.spyOn(ImagePickercommons, 'default').mockReturnValue(options);
    component = shallow(<CustomImagePicker {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly when the option is valid', () => {
    component.find(ActionSheet).prop('onPress')(0);
    component.find(ActionSheet).prop('onPress')(1);
    expect(options[0].action).toHaveBeenCalledTimes(1);
  });

  it('should render correctly when the option is invalid', () => {
    component.find(ActionSheet).prop('onPress')(0);
    expect(props.onSelected).not.toHaveBeenCalled();
  });
});
