// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Avatar } from 'react-native-elements';

// Under test file
import UserAvatar from '../index';

describe('<UserAvatar />', () => {
  let component: ShallowWrapper;
  const props = {
    image: 'http://localhost/img.png',
  };

  beforeEach(() => {
    component = shallow(<UserAvatar {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(Avatar).exists()).toBeTruthy();
  });
});
