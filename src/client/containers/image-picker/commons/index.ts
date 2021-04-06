// Dependencies
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const getImagePickerOptions = () => [
  {
    name: 'Take a photo',
    action: launchCamera,
    options: {
      mediaType: 'photo',
    },
  },
  {
    name: 'Choose from library',
    action: launchImageLibrary,
    options: {
      mediaType: 'photo',
    },
  },
  {
    name: 'Cancel',
  },
];

export default getImagePickerOptions;
