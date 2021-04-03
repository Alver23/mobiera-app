// Dependencies
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface IStyle {
  containerBackgroundColor: typeof Colors;
}

const styles = ({ containerBackgroundColor }: IStyle) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: containerBackgroundColor,
    },
  });

export default styles;
