// Dependencies
import { Platform } from 'react-native';

const white = '#ffffff';
const fontFamilyIos = 'Helvetica';
const fontFamilyAndroid = 'Roboto';

const fontFamily = {
  ...Platform.select({
    android: {
      fontFamily: fontFamilyAndroid,
    },
    ios: {
      fontFamily: fontFamilyIos,
    },
  }),
};

export const theme = {
  Text: {
    style: {
      color: white,
      fontSize: 15,
      ...fontFamily,
    },
    h4Style: {
      fontSize: 30,
    },
  },
  Button: {
    containerStyle: {
      alignItems: 'center',
    },
    buttonStyle: {
      width: 312,
      height: 50,
    },
    titleStyle: {
      fontSize: 17,
      ...fontFamily,
    },
  },
  Input: {
    containerStyle: {
      alignItems: 'center',
    },
    inputContainerStyle: [
      {
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 48,
        width: 312,
        backgroundColor: white,
      },
    ],
    inputStyle: {
      fontSize: 17,
    },
  },
};

export default theme;
